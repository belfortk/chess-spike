import React from  'react';
import Box from '../Box/Box';
import Piece from '../Piece';

interface IBox{
  color: boolean,
  x: number,
  y: number,
  piece: any
}

interface State {
  gameState: IBox[][],
  number: number
}

interface Props{
  
}

class Game extends React.Component<Props, State>{

  constructor(props:{}){
  super(props);

  var box = {
    color: true,
    x: 0,
    y: 0,
    piece: {character: "♕", color: true}
  }

  var box2 = {
    color: false,
    x: 1,
    y: 0,
    piece: null
  }

  var box3 = {
    color: false,
    x: 0,
    y: 1,
    piece: null
  }
  

  var box4 = {
    color: true,
    x: 1,
    y: 1,
    piece: null
  }
  
  
  this.state = {
    gameState: [
      [box, box2],
      [box3, box4]
      ],
      number:  1
    }

    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(){
    let tempPiece = this.state.gameState[0][0].piece;
    let currentGameState = this.state.gameState;
    currentGameState[0][1].piece = tempPiece;
    currentGameState[0][0].piece = null;
    this.setState({
      gameState: currentGameState
    });
  }


  render(){
    return(
      <div className="game-board">
      <div>
        <h3>{this.state.number}</h3>
      </div>
      <button onClick={this.handleClick}></button>
        {
        this.state.gameState.map(row => {
          return (<div className="row"> {row.map((box: { color: boolean, piece: any}) => 
          <Box piece={box.piece} backgroundColor={box.color ? "dodgerblue" : "pink"} occupied={box.piece ? true : false}></Box>)}</div>)
        })}
      </div>
    );
  }
}


export default Game;