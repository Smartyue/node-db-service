/**
 * Created by yuanjianxin on 2018/3/8.
 */

module.exports=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),time);
    })
}