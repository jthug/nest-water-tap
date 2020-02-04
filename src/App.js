import React from 'react';
import './App.css';
import Head from "./head/Head"
import Content from "./content/Content"
import Foot from "./foot/Foot"
function App() {
  return (
    <div className="container">
      <Head/>
      <Content/>
      <Foot/>
    </div>
  );
}

export default App;
