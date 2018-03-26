/**
 * Created by yuanjianxin on 2018/1/5.
 */

import DB from '../../db'
import { STRING, INTEGER } from 'sequelize'
module.exports=DB.YUE.define('verify_question', {

    id:{
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    question:STRING(100),
    answer:STRING(20)
}, {
    paranoid: false,
    tableName: 'verify_question',
    createdAt:false,
    updatedAt:false,
    deletedAt:false
})
