/**
 * Created by yuanjianxin on 2018/2/2.
 */
import ErrorCode from '../utils/ErrorCode'

module.exports=async (ctx,next)=>{

    //todo verify token



    //todo verify para
    if(!ctx.request.body.project || !ctx.request.body.table || !ctx.request.body.method){
        ctx.error=ErrorCode.INVALID_PARAMETER;
        return ctx.status=400;
    }

    if(!ctx.$appConfig.allowedMethod.includes(ctx.request.body.method)){
        ctx.error=ErrorCode.UNKNOWN_METHOD;
        return ctx.status=400;
    }

    let key=ctx.request.body.project +'-'+ctx.request.body.table;

    if(!global.TableMap.has(key)){
        ctx.error=ErrorCode.INVALID_PARAMETER;
        return ctx.status=400;
    }

    ctx.request.body.database=global.TableMap.get(key);

    await next();

}