import React from "react";

export interface Props {
  character: string,
  color: boolean
}


class Piece extends React.Component<Props, object>{
  color: boolean = false;
  character: string ='';
  

  render(){
    const characterColor = this.props.color ? "white" : "black";

    return(
    <div style={{color: characterColor}}>
      {this.props.character}
    </div>
    )
    
  }
}

export default Piece;