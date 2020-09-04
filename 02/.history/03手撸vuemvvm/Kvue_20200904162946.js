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

    //Observer实例
    new Observer(obj)
}

//创建kvue构造函数
class KVue {
    constructor(options) {
        //保存选项
        this.$options = options;
        this.$data = options.data
        //响应化处理
    }
}

class Observer {
    constructor(value) {
        this.value = value

        //判断其类型
        if(typeof value == 'object'){
            this.walk(value)
        }
    }

    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}