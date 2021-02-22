import React from "react";
import GridItem from "../Griditem";
import './item.css';

 
class Item extends React.Component
{   constructor(props)
    {
        super(props);
    }
    render()
    {   console.log("index is",this.props.rowvalue);
        let elements=[<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>,<GridItem/>];
        return(<div class="grid-row">{elements}</div>);
        
    }
}
export default Item;