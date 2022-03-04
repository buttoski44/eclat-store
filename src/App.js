import React from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import { Homepage } from './page/homepage/Homepage.component';

const Hatspage = () =>{
  return(
  <div>
    <h1> HATS PAGE</h1>
  </div>
  )
}

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop/hats' element={<Hatspage/>}/>
      </Routes>
    </div>
  );
}

export default App;
