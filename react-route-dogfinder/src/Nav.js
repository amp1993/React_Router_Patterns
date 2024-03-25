import React from "react";
import { Link } from "react-router-dom";
 

const Nav = ({dogs}) => {

    return (
        <div className="nav">
                        {dogs.map(dog=> (
            <header key={dog.name}><Link to={`/dogs/${dog.name}`} dogs={dogs}>{dog.name}</Link></header>

            ))}
        </div>

    )

};



export default Nav;