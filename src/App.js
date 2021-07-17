import React from 'react';
import './style.css';
import Square from './component/Square';

import { useState } from 'react';

export default function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');

  const chooseSquare = square => {
      setBoard(board.map((val,idx) => {
        if( idx == square && val == "" ) {
          return player;
        }
        return val;
      }))
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row" />
        <div className="row" />
      </div>
    </div>
  );
}
