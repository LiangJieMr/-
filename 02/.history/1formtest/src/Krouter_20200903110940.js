let Vue;

class VueRouter {
    constructor(options) {
        this.$options = options;

        //创建一个路由path和route映射
        this.routeMap = {}

        //将来当前路径current需要响应式
        //利用vue响应式来实现
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init() {
        //绑定浏览器事件
        this.bindEvents();

        //解析路由配置
        this.createRouteMap(this.$options);

        //创建 
        this.initComponent()
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange(e) {
        this.app.current = window.location.hash.slice(1) || '/'
    }

    createRouteMap(option) {
        options.routes.forEach(item => {
            // ['/home']: {path: '/home',component: Home}
            this.routeMap[item.path] = item;
        })
    }

    initComponent() {
        //声明全局组件
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                return h('a', {attrs:{href:'#'+this.to}}, this.$slots.default)
            }
        })

        Vue.component('router-view', {
            //箭头函数保留this只想
            render:(h) => {
                return h('a', {attrs:{href:'#'+this.to}}, this.$slots.default)
            }
        })
    }
}

// 把VueRouter变为插件 使用install方法 变为插件
VueRouter.install = function(_Vue) {
    Vue = _Vue; //这里保存上面使用

    //混入任务
    Vue.mixin({ //混入就是扩展vue
        beforeCreate() {
            //这里代码 会在外面初始化时 会调用
            //这样就实现了Vue扩展
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        },
    })
}