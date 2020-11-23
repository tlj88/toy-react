
// 原生的DOM对象是无论如何都没有办法去appendChild一个component的，
// 所以给原生dom对象封一层wrapper, wrapper具有setAttribute和appendChild方法，同时component也具有setAttribute和appendChild方法
class ElementWrapper { 
    constructor(tagName) { 
        this.root = document.createElement(tagName)
    }

    setAttribute(name, value) { 
        this.root.setAttribute(name, value)
    }
    appendChild(child) { 
        if (child.root) { 
            this.root.appendChild(child.root)
        }
    }
}

class TextWrapper { 
    constructor(content) { 
        this.root = document.createTextNode(content)
    }
}

class Component { 
    constructor() { 
        this._root = null
        this.props = {}
        this.children = []
    }
    setAttribute(name, value) { 
        this.props[name] = value    // props还未实现
    }
    appendChild(child) {    // component 添加 
        this.children.push(child)
    }
    get root() { 
        if (!this._root) { 
            this._root = this.render().root
        }
        return this._root
    }
}

function insertChild(child, parent) { 
    if (
        typeof child == 'object' &&
        child instanceof Array
    ) { 
        for (let c of child) { 
            insertChild(c, parent)
        }
    }
    if (typeof child === 'string') {
        child = new TextWrapper(child)
    }
    parent.appendChild(child)
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
        e = new type()
    }
    if(attributes) {
        for(let key in attributes) {
            let value = attributes[key]
            e.setAttribute(key, value)
        }
    }
    if (children) {
        for (let child of children) {
            insertChild(child, e)          
        }
    }
    return e
}

function render(component, mountEle) { 
    mountEle.appendChild(component.root)
}


export { 
    createElement,
    Component,
    render
}