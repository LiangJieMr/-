/*
 * @Author: liangJie
 * @Date: 2020-09-21 10:51:01
 * @LastEditors: 
 * @LastEditTime: 2020-09-21 15:17:10
 * @FilePath: \02\node\08\egg-server\config\plugin.js
 * @Description: 
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  swaggerdoc: {
    enable: true,
    package:  'egg-swagger-doc-feat'
  }
};
