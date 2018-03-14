/**
 * Created by yuanjianxin on 2018/2/13.
 */

/**
 * 获取请求的mime
 * @param request
 * @returns {*}
 */
const mime=function (request) {
    let str=request.header['content-type'] || '';
    return str.split(';')[0];
}


module.exports=async (ctx,next)=>{

    ctx.$query=ctx.request.query;

    if(mime(ctx.request)==='multipart/form-data'){
        ctx.$files=ctx.request.body.files;
        ctx.$body=ctx.request.body.fields;
    }else{
        ctx.$body=ctx.request.body;
    }
    await next();

    //todo 这里统一做数据返回格式

    if(ctx.error){
        ctx.status=400;
        return ctx.body=Object.assign({},{time:Date.now()},ctx.error);
    }

    ctx.status=200;
    ctx.body={
        code:'OK',
        data:ctx.result,
        time:Date.now()
    }

}