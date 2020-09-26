9/*
 * @Author: liangJie
 * @Date: 2020-09-21 11:11:04
 * @LastEditors: 
 * @LastEditTime: 2020-09-21 11:17:32
 * @FilePath: \02\node\08\egg-server\app\contract\user.js
 * @Description: 
 */
module.exports = {
    createUserRequest: {
        mobile: {type: 'string', required: true, description: '手机号', example: '13453787621', format: /^1[34578]\d{9}/},
        password: {type: 'string', required: true, description: '密码', example: '111111'},
        realName: {type: 'string', required: true, description: '姓名', example: 'tom'}
    }
}