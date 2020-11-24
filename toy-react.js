const RENDER_TO_DOM = Symbol('render to dom')

// 原生的DOM对象是无论如何都没有办法去appendChild一个component的，
// 所以给原生dom对象封一层wrapper, wrapper具有setAttribute和appendChild方法，同时component也具有setAttribute和appendChild方法
class ElementWrapper { 
    constructor(tagName) { 
        this.root = document.createElement(tagName)
    }

    setAttribute(name, value) { 
        if (name.match(/^on([\s\S]+)/)) {
            // RegExp.$1
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase()), value)
        } else { 
            if (name === 'className') {
                name = 'class'
            }
            this.root.setAttribute(name, value)
        }
    }
    appendChild(child) { 
        // if (child.root) { 
            // this.root.appendChild(child.root)
            if (child) {
                let range = document.createRange()
                range.setStart(this.root, this.root.childNodes.length)
                range.setEnd(this.root, this.root.childNodes.length)
                console.log('child', child)
                child[RENDER_TO_DOM](range)
            }
            
        // }
    }

    [RENDER_TO_DOM](range) { 
        range.deleteContents()
        range.insertNode(this.root)  // 插入到末尾
    }
}

class TextWrapper { 
    constructor(content) { 
        this.root = document.createTextNode(content)
    }
    [RENDER_TO_DOM](range) { 
        range.deleteContents()
        range.insertNode(this.root)  // 插入到末尾
    }
}

class Component { 
    constructor(props) { 
        this._root = null
        this.props = props
        this.attributes = {}
        this.children = []
        this._range = null
    }
    setAttribute(name, value) { 
        this.attributes[name] = value    // props还未实现
    }
    appendChild(child) {    // component 添加 
        this.children.push(child)
    }
    [RENDER_TO_DOM](range) { 
        this._range = range
        this.render()[RENDER_TO_DOM](range)
    }
    rerender() {
        let oldRange = this._range 

        let range = document.createRange()
        range.setStart(oldRange.startContainer, oldRange.startOffset)
        range.setEnd(oldRange.startContainer, oldRange.startOffset)
        this[RENDER_TO_DOM](range)

        oldRange.setStart(range.endContainer, range.endOffset)
        oldRange.deleteContents()
    }
    setState(newState) { 
        if (this.state === null || typeof this.state !== 'object') { 
            this.state = newState
            this.rerender()
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
        this.rerender()
    }
    // 第1课
    // get root() { 
    //     if (!this._root) { 
    //         this._root = this.render().root
    //     }
    //     return this._root
    // }
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