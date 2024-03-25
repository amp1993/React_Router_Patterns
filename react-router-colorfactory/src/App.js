import './App.css';
import React,{useState, useLocalStorage} from 'react';
import {BrowserRouter,Navigate} from 'react-router-dom';
import listOfColors from './listOfColors'
import RouteList from './RouteList';
import useLocalStorageState from './helpers';




function App() {
  

  const [colorList, setColorList] = useLocalStorageState('colorList',listOfColors);


  const handleSubmit = (newColor) => {
    setColorList([...colorList, newColor])
    console.log(colorList)
}


  return (
    <div className="App">
     <BrowserRouter>
      <RouteList  colors={colorList} handleSubmit={handleSubmit}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
