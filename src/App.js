// import logo from './logo.svg'
import './App.css';
import React from 'react';
import { useEffect,useContext } from 'react';

import Cards from './components/pages/Cards';
import Headers from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { NewsapiContext }from './context/NewsContext';


function App() {
const {state,fetchNewsData,Loading } = useContext(NewsapiContext)
 useEffect(()=>{
  fetchNewsData()
 }
 ,[])
  return (
    
    <div className="App overflow-x-hidden bg-gray-200">
      <Headers />
      {!Loading? <Cards data = {state}/>:<div>Loading</div>}
      <Footer/>
      
     </div>
  );
}

export default App;
