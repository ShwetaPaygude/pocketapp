import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Dscreen from "./Screen/Desktop/Dscreen"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      
        <Dscreen />
     
       
    </div>
  );
}

export default App;
