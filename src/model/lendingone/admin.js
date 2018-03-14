/**
 * Created by yuanjianxin on 2018/3/7.
 */
import DB from '../../db'


import { STRING, INTEGER, DATE } from 'sequelize'

//管理员表
module.exports=DB.LENDINGONE.define('admin', {
    id: {
        type: STRING(16),
        primaryKey: true
    },
    email: STRING(50),
    password: STRING(64),
    name: STRING(50),
    mobile: STRING(16),
    role_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    language: {
        type: STRING(10),
        allowNull: false,
        defaultValue: 'zh-cn'
    }
}, {
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'admin'
})
