import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter className="App">
      <Home/>
      {/*<AgentHeader/>*/}
    </BrowserRouter>
  );
}

export default App;
