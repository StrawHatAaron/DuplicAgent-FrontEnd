import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import AgentHeader from "./components/AgentHeader";

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      {/*<AgentHeader/>*/}
    </BrowserRouter>
  );
}

export default App;
