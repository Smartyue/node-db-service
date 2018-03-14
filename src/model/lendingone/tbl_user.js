/**
 * Created by yuanjianxin on 2018/1/5.
 */

import DB from '../../db'
import { STRING, INTEGER,DATE } from 'sequelize'
module.exports=DB.LENDINGONE.define('user', {

    id:{
        type: STRING(32),
        primaryKey: true,
        autoIncrement: false
    },
    phone:STRING(50),
    global_code:STRING(10),
    status:{
        type:INTEGER(4),
        defaultValue:1,
    },
    is_black:{
        type:INTEGER(4),
        defaultValue:0,
    },
    channel_id:{
        type:INTEGER(11),
        allowNull:true
    },
    verify_contact:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_job:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_id_card:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_profile:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_bank_card:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_face:{
        type:INTEGER(4),
        defaultValue:0
    },
    verify_status:{
        type:INTEGER(4),
        defaultValue:0
    },
    loan_line:{
        type:INTEGER(20),
        defaultValue:500
    },
    register_time:{
        type:INTEGER(20),
        defaultValue:Date.now()
    },
    register_date:{
        type:DATE
    }

}, {
    paranoid: true,
    tableName: 'tbl_user',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
})
