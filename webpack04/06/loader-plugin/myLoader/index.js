module.exports = function(source) {
    // loader处理模块
    // 多个loader是有顺序的
    // 一定要有返回值
    // console.log(result)
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace("hello",this.query.name)
        // return result;
        console.log(result)
        callback(null, result)
    },3000)
    // this.callback() 返回多个信息
    // this.callback(null, result)
}