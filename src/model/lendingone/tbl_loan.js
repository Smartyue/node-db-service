/**
 * Created by yuanjianxin on 2018/1/5.
 */

import DB from '../../db'
import { STRING, INTEGER } from 'sequelize'
module.exports=DB.LENDINGONE.define('loan', {

    id:{
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    user_id:STRING(32),
    loan_no:STRING(50),
    loan_status:INTEGER(4),
    approve_status:INTEGER(4),
    type:INTEGER(4),
    loan_amount:INTEGER(20),
    loan_period:INTEGER(11),
    fees:INTEGER(20),
    service_charge:INTEGER(20),
    late_fees:INTEGER(20),
    total_repayment:INTEGER(20),
    submit_time:INTEGER(20),
    expire_date:INTEGER(20)
}, {
    paranoid: true,
    tableName: 'tbl_loan',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})
