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
            if (newVal != val) {
                console.log('set' + key + ':' + newVal);
                val = newVal;
            }
        }
    })
}

function observe(obj) {
    if (typeof obj != 'object' || obj == null) {
        //希望用户传入的是obj
        return
        
    }
}

defineReactive(obj, 'foo', 'foo1')
obj.foo;
obj.foo = 'foooooooooo'
