/*
 * @Author: liangJie
 * @Date: 2020-09-21 10:51:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-21 16:12:44
 * @FilePath: \02\node\08\egg-server\config\config.default.js
 * @Description: 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600656649832_3393';

  // add your middleware config here
  config.middleware = ['errHandler'];//加载中间件

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '开课吧接口',
      description: '开课吧接口 swagger-ui for egg',
      version: '1.0.0'
    },
    schemes: ['http', 'https'],//协议
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,//加密
    // enableValidate: true,//
    routerMap: true,//注册router
    enable: true//
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
