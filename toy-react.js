const RENDER_TO_DOM = Symbol('render to dom')

class Component { 
    constructor(props) { 
        this.props = Object.create(null)
        this.children = []
        this._root = null
        this._range = null
    }
    setAttribute(name, value) { 
        // this.attributes[name] = value    // props还未实现
        this.props[name] = value
    }
    appendChild(child) {    // component 添加 
        this.children.push(child)
    }
    [RENDER_TO_DOM](range) { 
        this._range = range
        this._vdom = this.vdom
        this._vdom[RENDER_TO_DOM](range)
    }

    update() { 
        let isSameNode = (oldNode, newNode) => { 
            if (oldNode.type !== newNode.type) { 
                return false
            }
            for (let name in newNode.props) { 
                if (newNode.props[name] !== oldNode.props[name]) { 
                    return false
                }
            }
            if (Object.keys(oldNode.props).length !== Object.keys(newNode.props).length) { 
                return false
            }
            if (newNode.type == '#text') { 
                if (newNode.content !== oldNode.content) { 
                    return false
                }
            }
            return true
        }
        let update = (oldNode, newNode) => { 
            // type, props, children
            // #text content

            if (!isSameNode(oldNode, newNode)) { 
                // 这边体现range的优势，可以非常方便的更新range的内容
                newNode[RENDER_TO_DOM](oldNode._range)   
                return
            }
            newNode._range = oldNode._range

            let newChildren = newNode.vchildren
            let oldChildren = oldNode.vchildren
            for (let i = 0; i < newChildren.length; i++) {
                let newChild = newChildren[i]
                let oldChild = oldChildren[i]

                if (!newChildren || !newChildren.length) { 
                    return
                }

                let tailRange = oldChildren[oldChildren.length - 1]._range
                if (i < oldChildren.length) {
                    update(oldChild, newChild)
                } else { 
                    let range = document.createRange()
                    range.setStart(tailRange.endContainer, tailRange.endOffset)
                    range.setEnd(tailRange.endContainer, tailRange.endOffset)
                    newChild[RENDER_TO_DOM](range)
                    tailRange = range
                }
            }
        }

        let vdom = this.vdom
        update(this._vdom, vdom)
        this._vdom = vdom
    }
    // rerender() {
        // let oldRange = this._range 

        // let range = document.createRange()
        // range.setStart(oldRange.startContainer, oldRange.startOffset)
        // range.setEnd(oldRange.startContainer, oldRange.startOffset)
        // this[RENDER_TO_DOM](range)

        // oldRange.setStart(range.endContainer, range.endOffset)
        // oldRange.deleteContents()
    // }
    setState(newState) { 
        if (this.state === null || typeof this.state !== 'object') { 
            this.state = newState
            // this.rerender()
            this.update()
            return
        }
        let merge = (oldState, newState) => { 
            for (let p in newState) { 
                if (oldState[p] === null || typeof oldState[p] !== 'object') {
                    oldState[p] = newState[p]
                } else { 
                    merge(oldState[p], newState[p])
                }
            }
        }
        merge(this.state, newState)
        // this.rerender()
        this.update()
    }
    get vdom() { 
        return this.render().vdom
    }
    // get vchildren() { 
    //     return this.children.map(child => child.vdom)
    // }
}

class ElementWrapper extends Component{ 
    constructor(type) { 
        super(type)
        this.type = type
        // this.root = document.createElement(type)
    }
    
    [RENDER_TO_DOM](range) {
        this._range = range
        // range.deleteContents()

        let root = document.createElement(this.type)

        for (let name in this.props) {
            let value = this.props[name]

            if (name.match(/^on([\s\S]+)/)) {
                root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase()), value)
            } else {
                if (name === 'className') {
                    name = 'class'
                }
                root.setAttribute(name, value)
            }
        }

        if (!this.vchildren) { 
            this.vchildren = this.children.map(child => child.vdom)
        }

        for (let child of this.vchildren) { 
            let childRange = document.createRange()
            childRange.setStart(root, root.childNodes.length)
            childRange.setEnd(root, root.childNodes.length)
            child[RENDER_TO_DOM](childRange)
        }
        // range.insertNode(root)  // 插入到末尾
        replaceContent(range, root)
    }

    get vdom() { 
        this.vchildren = this.children.map(child => child.vdom)
        return this
        // return {
        //     type: this.type,
        //     props: this.props,
        //     children: this.children.map(child => child.vdom)
        // }
    }
}

class TextWrapper extends Component { 
    constructor(content) {
        super(content)
        this.type = '#text'
        this.content = content
        // this.root = document.createTextNode(content)
    }
    [RENDER_TO_DOM](range) { 
        this._range = range
        // range.deleteContents()
        // range.insertNode(this.root)  // 插入到末尾
        let root = document.createTextNode(this.content)
        replaceContent(range, root)
    }
    get vdom() {
        return this
        // return {
        //     type: '#text',
        //     content: this.content
        // }
    }
}

function replaceContent(range, node) { 
    range.insertNode(node)
    range.setStartAfter(node)
    range.deleteContents()

    range.setStartBefore(node)
    range.setEndAfter(node)
}

function insertChild(children, parent) { 
    // if (
    //     typeof child == 'object' &&
    //     child instanceof Array
    // ) { 
    //     for (let c of child) { 
    //         insertChild(c, parent)
    //     }
    // }
    // if (child === null) {
    //     return
    // }
    // if (typeof child === 'string') {
    //     child = new TextWrapper(child)
    // }
    // parent.appendChild(child)
    
    for(let child of children) {
        if (typeof child === 'string') {
            child = new TextWrapper(child)
        }
        if (child === null) {
            continue
        }
        if (typeof child == 'object' &&
            child instanceof Array) {
                insertChild(child, parent)
        } else {
            parent.appendChild(child)
        }
    }
}

/**
 * @param {*} type 
 * @param {*} attributes 
 * @param  {...any} children 
 */
function createElement(type, attributes, ...children) {
    let e
    if (typeof type === 'string') {
        e = new ElementWrapper(type)
    } else {
        e = new type(attributes)
    }
    if(attributes) {
        for(let key in attributes) {
            let value = attributes[key]
            e.setAttribute(key, value)
        }
    }
    // if (children) {
    //     for (let child of children) {
    //         insertChild(child, e)          
    //     }
    // }
    if (children) {
        insertChild(children, e)
    }
    return e
}

function render(component, mountEle) { 
    // 第1课
    // mountEle.appendChild(component.root)
    let range = document.createRange()
    range.setStart(mountEle, 0)
    range.setEnd(mountEle, mountEle.childNodes.length)
    range.deleteContents()
    component[RENDER_TO_DOM](range)
}


export { 
    createElement,
    Component,
    render
}