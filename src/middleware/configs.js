/**
 * Created by yuanjianxin on 2018/2/13.
 */

const appConfig=require('../config/app.config');
module.exports=async (ctx,next)=>{

    //todo 这里可能需要改动
    ctx.$appConfig=appConfig;
    await next();

}