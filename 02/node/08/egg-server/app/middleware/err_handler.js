/*
 * @Author: liangJie
 * @Date: 2020-09-21 15:49:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-21 16:14:10
 * @FilePath: \02\node\08\egg-server\app\middleware\err_handler.js
 * @Description: 异常事件处理
 */
module.exports = (options, app) => {
    return async function(ctx, next){
        try{
            await next()
        } catch (err) {
            //触发error事件
            app.emit('error', err, this)

            //设置错误状态码
            const status = err.status || 500
            //500
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message

            ctx.body = {
                code: status,
                error: error
            }

            if(status === 422){
                ctx.body.detail = err.errors
            }

            ctx.status = 200
        }
    }
}