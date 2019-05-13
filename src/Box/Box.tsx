import React from "react";
import Piece from '../Piece/Piece';

export interface Props {
  backgroundColor: string,
  occupied: boolean,
  piece: Piece
}

class Box extends React.Component<Props, object>{


  render(){
    const bgColor = this.props.backgroundColor;

    return (
      <div className="box" style={{backgroundColor: bgColor}}>
        { this.props.occupied ? <Piece color={this.props.piece.color} character={this.props.piece.character }></Piece> : ''}
      </div>
    );
  }

}

export default Box;