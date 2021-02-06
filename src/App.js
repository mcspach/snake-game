import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    columns: 20,
    rows: 20,
    scale: 10,
    score: 0,
    direction: 'right',
    lastDriection: null,
    dead: false
  };
   
  componentDidMount() {
    const container = document.getElementById('snake-container').parentElement;
    const boardWidth = container.offsetWidth - 125;
    const boardHeight = container.offsetHeight - 125;

    const scale = Math.floor(boardWidth / this.state.columns)

    this.setState({
      boardWidth: boardWidth,
      boardHeight: boardHeight,
      scale: scale,
      rows: Math.floor(boardHeight / scale),
    }, () => this.restart());
    console.log(this.state);
    }

    restart = () => {
        this.setState({
            direction: 'right',
            grid: this.state.grid || this.getGrid(),
            segments: [{
                x: 2,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 0,
                y: 0
            }],
            food: null,
            lastDirection: null,
            lastPosition  : {
                x : 2,
                y : 0
            },
            dead: false,
            score: 0
        });
    };

    getGrid = () => {
      const borderColor = this.state.dead ? '#666' : '#ccc';
      const tiles = [];
      for (let y = 0; y < this.state.rows; y++) {
        for (let x = 0; x < this.state.columns; x++) {
            tiles.push((
                <div
                    key={"tile-" + x + '-' + y}
                    style={{
                        position : 'absolute',
                        height   : this.state.scale,
                        width    : this.state.scale,
                        top      : this.state.scale * y,
                        left     : this.state.scale * x,
                        borderLeft : x > 0 ? `1px solid ${borderColor}` : 'none',
                        borderBottom : y < this.state.columns - 1 ? `1px solid ${borderColor}` : 'none'
                    }}
                >
                </div>
            ));
          }
        }
    return tiles;
    }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>SNAKE ATTACK</p>
        </header>
        <div id="snake-container">
          <div className="grid">
            {this.state.grid}
          </div>
        </div>
      </div>
    );
  }
}
