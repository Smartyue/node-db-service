/**
 * Created by yuanjianxin on 2018/1/18.
 */
const log4js=require('log4js');
const filename=process.env.LOG_FILE || './logs/log';
const pattern="-yyyy-MM-dd.log";
const log_config={
    appenders: {
        out: { type: 'console' },
        DbService: { type: 'dateFile', filename,pattern, alwaysIncludePattern:true },
        result: { type: 'dateFile', filename,pattern, alwaysIncludePattern:true},
        error: { type: 'dateFile', filename, pattern,alwaysIncludePattern:true},
        default: { type: 'dateFile', filename,pattern,alwaysIncludePattern:true},
        rate: { type: 'dateFile', filename, pattern,alwaysIncludePattern:true}
    },
    categories: {
        default: { appenders: ['out','default'], level: 'info' },
        DbService: { appenders: ['DbService'], level: 'info'},
        result: { appenders: ['result'], level: 'info' },
        error: { appenders: ['error'], level: 'error' },
        rate: { appenders: ['rate'], level: 'info' }
    }
}
log4js.configure(log_config);
const logger=log4js.getLogger('DbService');
module.exports=logger;