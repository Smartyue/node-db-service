/**
 * Created by yuanjianxin on 2018/1/4.
 */
module.exports = function (...invokes)
{
    if(invokes.length === 0)
        new Promise((resolve,reject)=>resolve([]));
    invokes = invokes.reduce( (r,v) =>{Array.isArray(v) ? r.push(...v) : r.push(v);return r},[] )
    return new Promise((resolve,reject)=>Promise.all(invokes)
        .then(results=>resolve(results)).catch(e=>reject(e)))

}