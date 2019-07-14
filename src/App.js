import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Home from "./pages/LandingPages/Home"
import AgentHome from './pages/AgentPages/AgentHome'

function App() {
  return (
    <BrowserRouter className="App">
      {/* <Home/> */}
      <AgentHome/>
    </BrowserRouter>
  );
}

export default App;
