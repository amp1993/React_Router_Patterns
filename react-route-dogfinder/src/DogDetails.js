import React from "react";
import { useParams, Navigate } from 'react-router-dom';



const DogDetails =({dogs}) => {
    const {name} = useParams();

    const dog = dogs.find(dog => dog.name === name)

    if (!dog){
       return <Navigate to="/dogs"/>
    }

    return (
     
            <div>
              <h1>Dog Details:</h1>
            
                 <div className="dog-details-container">
                     <h3>{dog.name}</h3>
                     <p>{dog.age}</p>
                     <ul>
                         {dog.facts.map(fact=>
                             <li>
                                 {fact}
                             </li>)}
                     </ul>
                 </div>
          
        
            </div>

    )

};

export default DogDetails;