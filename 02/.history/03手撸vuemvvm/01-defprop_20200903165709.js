// 响应式
const obj = {};

function defineReactive(obj, key, val) {
    //对传入的obj进行访问拦截
    Object.defineProperty(obj, key, {
        get() {
            console.log('get' + key);
            return val;
        },
        set(newVal) {
            if(newVal != val) {
                
            }
        }
    })
}