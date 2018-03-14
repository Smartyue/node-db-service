/**
 * Created by yuanjianxin on 2018/1/5.
 */

import DB from '../../db'
import { STRING, INTEGER } from 'sequelize'
module.exports=DB.LENDINGONE.define('message', {

    id:{
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    user_id:STRING(32),
    status:INTEGER(4),
    title:STRING(100),
    content:STRING(255),
    create_time:INTEGER(20),
    read_time:INTEGER(20)
}, {
    paranoid: true,
    tableName: 'tbl_message',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})
