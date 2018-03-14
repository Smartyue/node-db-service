/**
 * Created by yuanjianxin on 2018/3/13.
 */
const Logger=require('../utils/Logger');
module.exports=async (ctx,next)=>{

    ctx.$logger=Logger;
    await next();
    ctx.$logger.info(`==Ip:${ctx.ip}|Status:${ctx.status}|httpMethod:${ctx.method}|Project:${ctx.$body && ctx.$body.project||null}|Database:${ctx.$body && ctx.$body.database || null}|Table:${ctx.$body && ctx.$body.table || null}|Method:${ctx.$body && ctx.$body.method || null}|Error:${ctx.error && JSON.stringify(ctx.error) || null}|Others:${ctx.protocol.toUpperCase()}/${ctx.req.httpVersion},${ctx.get('referrer')},${ctx.header['user-agent']}==`);
}