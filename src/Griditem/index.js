import React from 'react';
import "./griditem.css";

class GridItem extends React.Component
{
    constructor(props)
        {
            super(props);
            
        }
    
render()
    {
        //console.log("index is",this.props.rowvalue);
        return(
            <div className="grid-item" onClick={()=>{
                this.props.handlePlayerClick(this.props.rowvalue)
            }}>{this.props.row}</div>
        );
    }

}
export default GridItem;
