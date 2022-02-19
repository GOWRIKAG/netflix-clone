import React from 'react';
import './App.css'
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

function App() {
  return (
     <div className="app"> <Nav/>
       <Banner/>
       <Row title="netflix originals" />
       <Row title="bollywood"/> 
       </div>

  
  );
}

export default App;
