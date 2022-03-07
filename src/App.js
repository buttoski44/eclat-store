import React from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import { Homepage } from './page/homepage/Homepage.component';
import Shop from './page/shoppage/Shop.component';
import { Header } from './components/header/Header.component';
import { Sign } from './page/sign/Sign.component';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/sign' element={<Sign/>}/>
      </Routes>
    </div>
  );
}

export default App;
