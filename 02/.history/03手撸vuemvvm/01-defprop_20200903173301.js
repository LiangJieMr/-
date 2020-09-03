// 响应式

function defineReactive(obj, key, val) {
    //递归
    observe(val)

    //对传入的obj进行访问拦截
    Object.defineProperty(obj, key, {
        get() {
            console.log('get ' + key);
            return val;
        },
        set(newVal) {
            if (newVal != val) {
                console.log('set ' + key + ':' + newVal);
                //如果新值为对象 再次递归
                // observe(newVal)
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
observe(obj)
obj.foo;
obj.foo = 'fooooooooo';
obj.bar;
obj.bar = 'barrrrrrrr';
obj.baz;
// obj.baz.a = 10
obj.baz = {a: 100}
obj.baz.a = 10000
