
function createElement(type, attributes, ...children) {
    let e
    if (typeof type === 'string') {
        e = document.createElement(type)
    } else {
        e = new type()
    }
    if(attributes) {
        for(let key in attributes) {
            let value = attributes[key]
            e.setAttribute(key, value)      // component中没有setAttribute方法
        }
    }
    if(children) {
        for(let child of children){
            if (typeof child === 'string') {
                child = document.createTextNode(child)
            }
            e.appendChild(child)        // 原生的DOM对象是无论如何都没有办法去appendChild一个component的，
                                        // 所以给原生dom对象封一层wrapper 
        }
    }
    return e
}

class MyComponent {
    constructor() {}
}


// jsx
window.a = <MyComponent id="app" class="test">
    <div>bjyx</div>
    <div></div>
    <div></div>
</MyComponent>