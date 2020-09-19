/*
 * @Author: 梁杰
 * @Date: 2020-09-04 21:52:53
 * @LastEditors: 梁杰
 * @LastEditTime: 2020-09-05 11:49:02
 * @Description: 
 */
function defineReactive(obj, key, val) {
    //递归
    observe(val)


    //创建dep与当前key一一对应
    const dep = new Dep()

    //对传入的obj进行访问拦截
    Object.defineProperty(obj, key, {
        get() {
            console.log('get ' + key);
            //依赖收集在这里
            Dep.target && dep.addDep(Dep.target)
            return val;
        },
        set(newVal) {
            if (newVal != val) {
                console.log('set ' + key + ':' + newVal);
                //如果新值为对象 再次递归
                observe(newVal)
                val = newVal;

                //
                // watchers.forEach(w => w.updata())
                dep.notify()
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

//代理函数方便用户直接访问$data中的数据、
function proxy(vm, sourceKey) {
    Object.keys(vm[sourceKey]).forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm[sourceKey][key]
            },
            set(newVal) {
                vm[sourceKey][key] = newVal
            }
        })
    })
}

//创建kvue构造函数
class KVue {
    constructor(options) {
        //保存选项
        this.$options = options;
        this.$data = options.data;
        //响应化处理
        observe(this.$data)

        //代理
        proxy(this, '$data')

        //编译
        new Compiler(this.$options.el, this)
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

//观察者：保存更新函数，值发生变化调用更新函数
// var watchers = []
class Watcher {
    constructor(vm, key, updatefn) {
        this.vm = vm;
        
        this.key = key;

        this.updatafn = updatefn;

        // watchers.push(this)
        
        //Dep.target静态属性设置为当前watcher实例
        Dep.target = this;
        this.vm[this.key]//读取出发getter
        Dep.target = null;//制空
    }

    updata() {
        this.updatafn.call(this.vm, this.vm[this.key])
    }
}

//Dep：依赖，管理相关watcher实例
class Dep {
    constructor() {
        this.deps = [];
    }

    addDep(dep) {
        this.deps.push(dep);
    }

    notify() {
        this.deps.forEach(dep => dep.updata())
    }
}