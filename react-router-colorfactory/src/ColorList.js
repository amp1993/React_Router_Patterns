
import React from "react";
import { Link } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');


const ColorList = ({colors}) => {

    return(
        <div>
            <div className="header-for-colorList">
            <h2>Welcome to the color factory</h2>
            <h1><Link to='/colors/new'>Add a color</Link></h1>
            </div>
            <p>Please select a color:</p>
            <ul>
                    {colors.map(color=>(
                       
                    <li key={uuidv4()}><Link to={`/colors/${color.colorName}`}>{color.colorName}</Link></li>
               
            ))}
             </ul>

        </div>
    )

}

export default ColorList;