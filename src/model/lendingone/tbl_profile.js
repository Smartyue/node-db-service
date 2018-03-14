/**
 * Created by yuanjianxin on 2018/1/5.
 */

import DB from '../../db'
import { STRING, INTEGER } from 'sequelize'
module.exports=DB.LENDINGONE.define('profile', {

    id:{
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    user_id:STRING(32),
    name:STRING(255),
    gender:INTEGER(1),
    id_number:STRING(255),
    mother_name:STRING(255),
    education:INTEGER(4),
    marital_status:INTEGER(2),
    location:STRING(50),
    lat:STRING(20),
    lng:STRING(20)
}, {
    paranoid: true,
    tableName: 'tbl_profile',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})
