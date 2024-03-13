import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Read from "./components/Read";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
