//编译器
//递归遍历dom树
//判断节点类型，如果是文本，则判断是否是差值绑定
//如果是元素，则遍历器属性判断是否是指令或事件，然后递归子元素
class Compile {
    //el宿主元素 vm是Kvue实例
    constructor(el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);

        if(this.$el){
            //执行编译
            this.compile()
        }
    }

    compile() {
        //遍历el树
        const childNodes = el.childNodes;
        childNodes.forEach(node => {
            //判断是否是元素
            if(this.isElement(node)) {
                console.log('编译元素'+node.nodeName);
            }
        });
    }
}