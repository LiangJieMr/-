/*
 * @Author: liangJie
 * @Date: 2020-09-21 10:51:01
 * @LastEditors: 
 * @LastEditTime: 2020-09-21 15:26:05
 * @FilePath: \02\node\08\egg-server\app\controller\home.js
 * @Description: 
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eg1g';
  }
}

module.exports = HomeController;
