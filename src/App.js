import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
