import React from "react";
const { v4: uuidv4 } = require('uuid');

const DogList = ({dogs}) => {
    return(
       <div className="dog-list">
         <h1>Dog Finder</h1>
        {dogs.map(dog => (
            <div key={uuidv4()} className="dog-list-container">
                <h3>Name: {dog.name}</h3>
                <p>Age: {dog.age}</p>
                
            </div>
        ))}
   
       </div>
)
}
export default DogList;