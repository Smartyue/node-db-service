/**
 * Created by yuanjianxin on 2018/3/7.
 */
import DB from './db'
const Koa=require('koa');
const koaBody = require('koa-body');
const dbMap=require('./config/dbMapper.config')
const router=require('./config/router.config');
const param=require('./middleware/param');
const configs=require('./middleware/configs');
const logger=require('./middleware/logger');
const appConfig=require('./config/app.config');
const RedisHandler=require('./utils/RedisUtil');
const app=new Koa();
const auth=require('./middleware/auth');
app.use(koaBody({multipart: true}))
app.use(logger)
app.use(configs)
app.use(param);
app.use(auth);
app.use(router.routes());
(
    async ()=>{

        // init table map
        global.TableMap=global.TableMap || new Map();
        Object.keys(dbMap).forEach(v=>{
            Object.keys(dbMap[v]).forEach(vv=>{
                dbMap[v][vv].forEach(t=>{
                    TableMap.set(v+'-'+t,vv);
                })
            })
        })


        await RedisHandler.instance.init();

        let server=app.listen(appConfig.port);

        console.log(`==DbService start at host【${server.address().address}】   port【${server.address().port}】==`)
    }
)()

