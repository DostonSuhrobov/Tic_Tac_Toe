import React from 'react';
import './style.css';
import Square from './component/Square';

import { useState } from 'react';

export default function App() {
  const [board, setboard] = useState(['', '', '', '', '', '', '', '', '']);

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => alert(0)} />
          <Square val={board[1]} chooseSquare={() => alert(1)} />
          <Square val={board[2]} chooseSquare={() => alert(2)} />
        </div>
        <div className="row" />
        <div className="row" />
      </div>
    </div>
  );
}
