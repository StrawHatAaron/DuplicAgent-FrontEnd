import React from 'react';
import {HashRouter, brow} from 'react-router-dom'
import AgentRouter from './pages/AgentPages/AgentRouter'




function App() {
  return (
    <HashRouter className="App">
      {/* <Home/> */}
      <AgentRouter />
    </HashRouter>
  );
}

export default App;
