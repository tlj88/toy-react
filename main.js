import { createElement, Component, render } from './toy-react.js'



// function Square(props) {
//     return (
//         <button class="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
class Square extends Component { 
    constructor(props) { 
        super(props)
    }
    render() { 
        return (
            <button class="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div class="status">{status}</div>
                <div class="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div class="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div class="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div class="game">
                <div class="game-board">
                    <Board />
                </div>
                <div class="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

render(
    <Game />,
    document.getElementById('root')
);




// class MyComponent extends Component {
//     constructor(props) { 
//         super(props)
//         this.state = {
//             a: 1,
//             b: 2
//         }
//     }
//     render() { 
//         return <div class="my-component">
//             <h1>my component</h1>
//             <button onclick={() => { this.setState({ a: this.state.a++ })}}>click</button>
//             <span>{this.state.a.toString()}</span>
//             <span>{this.state.b.toString()}</span>
//         </div>
//     }
// }


// // jsx
// render(<MyComponent id="app" class="test">
//     <div>bjyx</div>
//     <div></div>
//     <div></div>
// </MyComponent>, document.getElementById('app'))