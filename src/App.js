import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
    </BrowserRouter>
  );
}

export default App;
