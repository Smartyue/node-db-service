/**
 * Created by yuanjianxin on 2018/3/7.
 */
import Sequelize from 'sequelize'
import  { DbConfigs }  from './config/app.config'

const sequelize={}
DbConfigs.forEach(v=>{
    sequelize[v.name]=new Sequelize(v.database,v.username,v.password,v);
})
Object.values(sequelize).forEach(v=>v.authenticate().then(res=>console.log('db connect success!')).catch(err=>console.log('connect failed!',err)));

export default sequelize;