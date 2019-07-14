import React from 'react';
import {BrowserRouter} from 'react-router-dom'
// import Home from "./pages/LandingPages/Home"
import AgentRouter from './pages/AgentPages/AgentRouter'


function App() {
  return (
    <BrowserRouter className="App">
      {/* <Home/> */}
      <AgentRouter/>
    </BrowserRouter>
  );
}

export default App;
