import React from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import { Homepage } from './page/homepage/Homepage.component';
import Shop from './page/shoppage/Shop.component';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
