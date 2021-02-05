import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    height: 10,
    width: 10,
    grid: [],
    score: 0,
  };
   
  createGrid() {
    const grid = [];
    for ( let row = 0; row < this.state.rows; row++) {
        for ( let col = 0; col < this.state.cols; col++) {
        grid.push({
          row: row,
          col: col
        });
      this.setState({grid: grid});
      }
    }
  }


  render() {

    const gridItems = this.state.grid.map((grid) => {
      return ( 
        <div key={grid.row.toString() + '-' + grid.col.toString()}
        className="grid-item" ></div>
      );
    })

    return (
      <div className="App">
        <header className="App-header">
          <p>SNAKE ATTACK</p>
        </header>
        <div className="snake-container">
          <div className="grid">
            {gridItems}
          </div>
        </div>
      </div>
    );
  }
}
