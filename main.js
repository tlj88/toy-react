import { createElement, Component, render } from './toy-react.js'

class MyComponent extends Component {
    render() { 
        return <div class="my-component">{this.children}</div>
    }
}


// jsx
render(<MyComponent id="app" class="test">
    <div>bjyx</div>
    <div></div>
    <div></div>
</MyComponent>, document.getElementById('app'))