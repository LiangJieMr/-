//编译器
//递归遍历dom树
//判断节点类型，如果是文本，则判断是否是差值绑定
//如果是元素，则遍历器属性判断是否是指令或事件，然后递归子元素
class Compiler {
    //el宿主元素 vm是Kvue实例
    constructor(el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);

        if(this.$el){
            //执行编译
            this.compile(this.$el)
        }
    }

    compile(el) {
        //遍历el树
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            //判断是否是元素
            if(this.isElement(node)) {
                console.log('编译元素'+node.nodeName);
                this.compileElement(node)
            } else if (this.isInter(node)){
                console.log('编译插值绑定'+node.textContent);
                this.compileText(node)
            }

            //递归子节点
            if(node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        });
    }

    isElement(node) {
        return node.nodeType === 1
    }

    isInter(node) {
        //首先是文本，其次内容是{{xx}}
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    compileText(node) {
        node.textContent = this.$vm[RegExp.$1]
    }

    compileElement(node) {
        //节点是元素
        //遍历其属性列表
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            //规定：指令以k-xx="oo"定义
            const attrName = attr.name// k-xx
        })
    }
}