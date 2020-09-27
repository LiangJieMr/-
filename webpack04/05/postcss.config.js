const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        //postcss 使用autoprefixer 添加前缀的标准
        // autoprefixer("IE 10")
        autoprefixer({
            //last 2 versions 兼容最近的两个版本 ios 14 13
            //>1% 全球浏览器的市场份额 大于1%的浏览器
            overrideBrowserslist: ["last 2 versions", ">1%"]
        })
    ]
}