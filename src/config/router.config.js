/**
 * Created by yuanjianxin on 2018/2/13.
 */
const Service=require('../utils/Service');
const router=require('koa-router')();

router.post('/',async (ctx,next)=>{
    let data=ctx.$body;

    data.database=data.database.toLowerCase();
    data.table=data.table.toLowerCase();
    try{

        ctx.result=await Service(data.database,data.table,data.method,data.where || null,data.paras || null, data.result || null);

    }catch (e){
        ctx.error={
            code:'REQUEST_ERROR',
            msg:JSON.stringify(e)
        }
    }
})


module.exports=router