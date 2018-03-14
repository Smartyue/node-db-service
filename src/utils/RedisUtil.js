/**
 * Created by yuanjianxin on 2018/3/7.
 */
import { redisConfig } from '../config/app.config'
const AsyncAll=require('./AsyncAll');
const redis=require('redis')
const pool=[];
const Sleep=require('./Sleep');
module.exports=class RedisUtil{

    static get instance () {
        if(!RedisUtil._instance)
            RedisUtil._instance=new RedisUtil();
        return RedisUtil._instance;
    }


    get client (){
        return pool.shift();
    }


    async init(){
        let promiseList=[];
        Array(redisConfig.size).fill(null).forEach((v)=>{
            promiseList.push((
                async v=>{
                    pool.push(await this.createConnect(redisConfig.port,redisConfig.host))
                }
            )(v));
        });
        await AsyncAll(promiseList);
    }

    async createConnect(port,host){
        let that=this;
        return new Promise((resolve,reject)=>{
            let client=redis.createClient(port,host,{
                retry_strategy (options) {
                    if (options.error && options.error.code === 'ECONNREFUSED') {
                        throw new Error('The redis server refused the connection');
                    }
                    console.log('===Redis Error',options.error)
                    //不要重连，直接用池里别的
                    that.removeConnect(client)
                    return null;
                }
            });
            client.on('error',(err)=>{
                console.log('redis error...',err)
                that.removeConnect(client)
                reject(err);
            });
            client.on('disconnect',function (){
                console.log('redis disconnect...')
                that.removeConnect(client)
            })
            client.on('connect',()=>{
                console.log('===redis connect success');
                resolve(client)
            });
        })
    }


    async removeConnect(client){
        let index=0;
        (index=pool.indexOf(client)) >=0 && pool.splice(index,1);
        let obj=null;
        redisConfig.autoCheckAndCreate && pool.length < redisConfig.size && (obj = await this.createConnect(redisConfig.port,redisConfig.host)) && pool.push(obj);
    }


    async exec(cmdName,...paras){
        let connect=null
        while(true){
            if(pool.length>0){
                connect=this.client;
                break;
            }
            await Sleep(10);
        }
        return new Promise( ( resolve,reject )=>
            connect[cmdName](...paras,
                (err,result)=>{
                    pool.push(connect);
                    err ? reject(err):resolve(result)
                }
            )
        )
    }

}