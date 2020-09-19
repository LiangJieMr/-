/*
 * @Author: 梁杰
 * @Date: 2020-09-04 21:52:53
 * @LastEditors: 梁杰
 * @LastEditTime: 2020-09-05 11:31:45
 * @Description: 
 */
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
        // node.textContent = this.$vm[RegExp.$1/]
        this.updata(node, RegExp.$1, 'text')
    }

    compileElement(node) {
        //节点是元素
        //遍历其属性列表
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            //规定：指令以k-xx="oo"定义
            const attrName = attr.name// k-xx
            const exp = attr.value // oo 
            if (this.isDirective(attrName)) {
                const dir = attrName.substring(2) //xx
                //执行指令
                this[dir] && this[dir](node, exp)
            }
        })
    }

    isDirective(attr) {
        return attr.indexOf('k-') == '0'
    }

    updata(node, exp, dir) {
        //初始化
        //指令对应的更新函数xxUpdater
        const fn = this[dir+'Updater']
        fn && fn(node, this.$vm[exp])

        //更新处理 封装一个更新函数，可以更新对应dom
        new Watcher(this.$vm, exp, function(val) {
            fn && fn(node, val)
        })
    }
    textUpdater(node, value){
        node.textContent = value
    }

    //k-text
    text(node, exp) {
        // node.textContent = this.$vm[exp]
        this.updata(node, exp, 'text')
    }

    //k-html
    html(node, exp) {
        // node.innerHTML = this.$vm[exp]
        this.updata(node, exp, 'html')
    }

    htmlUpdater(node, value){
        node.innerHTML = value
    }
}