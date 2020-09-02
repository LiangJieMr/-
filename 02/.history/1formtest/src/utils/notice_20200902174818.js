//创建组件实例 ，挂载body
import Vue from 'vue';
export default function create(Component, props) {
    //0.先创建vue实例
    const vm = new Vue({
        render(h) {
            //render提供一个h函数， 可以渲染vNode，虚拟dom
            
        }
    });
    //1.创建组件实例
}