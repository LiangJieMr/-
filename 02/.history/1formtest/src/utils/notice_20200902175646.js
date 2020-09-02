//创建组件实例 ，挂载body
import Vue from 'vue';
export default function create(Component, props) {
    //0.先创建vue实例
    const vm = new Vue({
        render(h) {
            //render提供一个h函数， 可以渲染vNode，虚拟dom
            return h(Component, {props}) //将组件节点转化为vNode  props属性
        }
    }).$mount();
    //1.上面vm帮我们创建组件实例
    //2.通过$children获取组件实例
    const comp = vm.$children[0]
    //3.将dom节点追加至body
    document.body.appendChild(vm.$el)
    //4.资源控制清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy();//销毁组件
    }
    //5.
    return comp;
}