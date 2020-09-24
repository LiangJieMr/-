/*
 * @Author: liangJie
 * @Date: 2020-09-21 10:52:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-22 14:58:52
 * @FilePath: \02\node\08\egg-server\app\controller\user.js
 * @Description: 
 */
const {Controller} = require('egg')
/**
 * @Controller 用户管理
 */
class UserController extends Controller{
    constructor(ctx) {
        //父类super方法
        super(ctx)
    }
    /**
     * @summary 创建用户
     * @description: 创建用1户 记录用户账户/密码/类型
     * @router post /api/user
     * @request  body createUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async create() {
        const {ctx} = this
        ctx.body = 'user ctr222l'
    }
}

//导出
module.exports = UserController