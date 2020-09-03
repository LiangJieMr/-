// 响应式

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

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

// defineReactive(obj, 'foo', 'foo1')
// obj.foo;
// obj.foo = 'foooooooooo'
const obj = {foo:'foo', bar: 'bar', baz: {a: 1}};
