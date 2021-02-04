import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: 10,
      cols: 10,
      grid: [],
    };
  

  const grid = [];
  for ( let col = 0; col < this.state.cols; col++) {
    for ( let row = 0; row < this.state.rows; row++) {
      grid.push({
        row,
        col
      })
    }
  }
  this.setState({grid: grid});
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

export default App;
