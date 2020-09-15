###
 # @Author: liangJie
 # @Date: 2020-09-15 16:40:02
 # @LastEditors: 
 # @LastEditTime: 2020-09-15 16:41:34
 # @FilePath: \02\vue-auto-router-cli\lib\publish.sh
 # @Description: 
### 
#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config setregistry=http://registry.npmjs.orgecho'请进⾏行行登录相关操作：'
npm login # 登陆
echo "-------publishing-------"
npm publish # 发布
npm config setregistry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo"发布完成"
exit