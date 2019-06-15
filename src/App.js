import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/LandingPages/Header";
import AgentHeader from "./components/AgentHeader";
import Home from "./components/LandingPages/Home";

function App() {
  return (
    <BrowserRouter className="App">
      <Home/>
      {/*<AgentHeader/>*/}
    </BrowserRouter>
  );
}

export default App;
