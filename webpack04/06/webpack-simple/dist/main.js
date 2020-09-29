(function(graph){
            function require(module){
                function reRequire(relativePath){
                   return graph[module].dependencies[relativePath]
                }
                var exports = {};
                (function(require,exports,code){
                    eval(code)
                })(reRequire,exports,graph[module].code)
                return exports
            }
            require('./src/index.js')
        })({"./src/index.js":{"dependencies":{"./a.js":"src\\a.js","./b.js":"src\\b.js"},"code":"\"use strict\";\n\nvar _a = _interopRequireDefault(require(\"./a.js\"));\n\nvar _b = _interopRequireDefault(require(\"./b.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/*\r\n * @Author: liangJie\r\n * @Date: 2020-09-28 16:44:00\r\n * @LastEditors: Please set LastEditors\r\n * @LastEditTime: 2020-09-29 10:10:51\r\n * @FilePath: \\06\\webpack-simple\\src\\index.js\r\n * @Description: 入口文件\r\n */\nconsole.log(\"hello,webpack-bundle!\" + _a[\"default\"]);"},"src\\a.js":{"dependencies":{"./c.js":"src\\c.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _c = _interopRequireDefault(require(\"./c.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/*\r\n * @Author: 梁杰\r\n * @Date: 2020-09-28 23:07:23\r\n * @LastEditors: 梁杰\r\n * @LastEditTime: 2020-09-28 23:34:31\r\n * @Description: \r\n */\nvar _default = \"hahah\" + _c[\"default\"];\n\nexports[\"default\"] = _default;"},"src\\b.js":{"dependencies":{},"code":"\"use strict\";\n\nconsole.log(\"xixi\");"},"src\\c.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = \"cccc\";\nexports[\"default\"] = _default;"}})