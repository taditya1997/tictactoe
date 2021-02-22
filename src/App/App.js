
import React from "react";
import './App.css';
import GridItem from "../Griditem";
//import Item from '../Item';
import Header from '../Header';
import { findAllByTestId, render } from '@testing-library/react';

class App extends React.Component{
  constructor()
    {
      super();
      this.state=
      {
        gamestate:["","","","","","","","",""],
        playerTurn:"X",
        gameover:false
        
        
      };
      
    }
    checkwin=(array) =>
    {  
      console.log("in it");
      let check=false;
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) 
      {  
       
        let [a, b, c] = lines[i];
        if ( array[a] && array[a] === array[b] && array[a] === array[c]) 
        {
          check=true;
          return check;
        }

      }
      return false;
    }
  isdraw=(copied)=>
    {  
      //console.log(copied.length);
      let draw=true;
      for( var i=0;i<copied.length;i++)
      {
        if(copied[i]=="")
        {
          draw=false;
          return draw;
        }
      }
      return draw;
    }
  handlePlayerClick = (rowvalue) =>
    {
     let copied=[...this.state.gamestate];
     if(copied[rowvalue]=== "" && this.state.gameover === false)
     {
      copied[rowvalue]=this.state.playerTurn;
      console.log(copied);
      this.setState({
        gamestate:copied
        });
      if(this.checkwin(copied) === true)
      {
        alert(this.state.playerTurn+"wins");
        this.setState({
        gameover:true
      });
      }
      else if(this.isdraw(copied) === true)
      {
        
        this.setState({
          gameover:true
        });
        alert("Match has been draw");
        
      }
      else
      {
        this.setState({
          gamestate:copied,
          playerTurn:this.state.playerTurn=="X"?"0":"X",
          //gameover:false

        });
      }
    }
    
     }
  
     
  render()
  {
    
    return (
      <div id="body">
      <Header/>
      <div className="container">
        {this.state.gamestate.map((row,rowvalue)=>
          (<GridItem row={row} rowvalue ={rowvalue} handlePlayerClick={this.handlePlayerClick} />))};
     
      </div>
      </div>);
    

  }
  
}

export default App;
