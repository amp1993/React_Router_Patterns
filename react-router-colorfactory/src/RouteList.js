import React from "react";
import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';
import {Routes, Route, Navigate} from 'react-router-dom';

const RouteList = ({colors, handleSubmit}) =>{
    return (
        <Routes>
        <Route path='/colors' element={<ColorList colors={colors}/>}/>
         <Route path='/colors/:colorName' element={<Color colors={colors}/>}/>
         <Route path='colors/new' element={<ColorForm colors={colors} handleSubmit={handleSubmit}/>}/>
         <Route path='*'element={<Navigate to='/colors'/>}/>
   </Routes>
            
    );
   

};

export default RouteList;