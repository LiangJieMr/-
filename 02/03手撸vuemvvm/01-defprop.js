/*
 * @Author: 梁杰
 * @Date: 2020-09-03 22:44:59
 * @LastEditors: 梁杰
 * @LastEditTime: 2020-09-06 21:42:25
 * @Description: 
 */
//数组响应式
//1.替换数组原型中的7个方法
const originalProto = Array.prototype;
//备份一份，修改备份
const arrayProto = Object.create(originalProto);
['push','pop','shift','unshift','reverse','splice','splice'].forEach(method => {
    arrayProto[method] = function() {
        //原始操作
        originalProto[method].apply(this, arguments);
        //覆盖操作；通知更新
        console.log('数组执行'+method+'操作')
    }
})

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
                observe(newVal)
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

    //判断传入obj类型
    if(Array.isArray(obj)){
        //覆盖原型，替换7个变更操作
        obj._proto_ = arrayProto;
        //对数组内部元素执行响应化
        const keys = Object.keys(obj);
        for (let i = 0; i < obj.length; i++) {
            console.log(obj[i],'222')
            observe(obj[i])
        }
    } else {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

function set(obj, key, val) {
    defineReactive(obj, key, val)
}

// defineReactive(obj, 'foo', 'foo1')
// obj.foo;
// obj.foo = 'foooooooooo'
const obj = {foo:'foo', bar: 'bar', baz: {a: 1}, arr:[1,2]};
observe(obj)
obj.foo;
obj.foo = 'fooooooooo';
obj.bar;
obj.bar = 'barrrrrrrr';
obj.baz;
// obj.baz.a = 10
obj.baz = {a: 100}
obj.baz.a = 10000
set(obj, 'dong', 'dong')
obj.dong
obj.arr.push(3)
//object.definePrototype()对数组无效
