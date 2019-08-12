import React from 'react';
import {HashRouter,} from 'react-router-dom'
import AgentRouter from './pages/AgentPages/AgentRouter'
import Home from './pages/LandingPages/Home'



function App() {
  return (
    <HashRouter className="App">
      <Home/>
      {/* <AgentRouter /> */}
    </HashRouter>
  );
}

export default App;
