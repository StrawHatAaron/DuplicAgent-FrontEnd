import React from 'react';
import {BrowserRouter} from 'react-router-dom'
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
