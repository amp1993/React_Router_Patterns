import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const Color = ({colors}) => {
    const { colorName } = useParams();

    const color = colors.find(color=> color.colorName === colorName);

    if(!color){
        return <Navigate to="/colors"/>
    }

    const colorUppercase = color.colorName.toUpperCase()

    
    
    return(
        <div className="background-color" style={{backgroundColor : color.colorName}}>
            <h1>THIS IS {colorUppercase}.</h1>
            <h1><Link to={`/colors`}>GO BACK</Link></h1>
        </div>
    )

    
    
};

export default Color;