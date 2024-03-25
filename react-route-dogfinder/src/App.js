import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from './Nav';
import DogList from './DogList';
import dogsData from './dogsData';
import DogDetails from './DogDetails';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Nav dogs={dogsData.dogs}/>
    <switch>
    <Routes>
        <Route path="/dogs" element={<DogList dogs={dogsData.dogs} />}/>
        <Route path="/dogs/:name" element={<DogDetails dogs={dogsData.dogs} />}/>
        <Route path="*" element={<Navigate to="/dogs"/>}/>
      </Routes>
    </switch>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
