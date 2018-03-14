/**
 * Created by yuanjianxin on 2018/3/7.
 */
const M=require('./Method');
module.exports=async (database,table,method,...paras)=>{
        return await M[method](database,table,...paras);
}