//import logo from './logo.svg';
//import './App.css'; //useState,
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CountComponent from "./CountComponent";
import TodosComponent from "./TodosComponent";

function App() {
  return (
    <>
      <h1>Main page</h1>
      <>
        <Link to="/todo">
          {" "}
          <ul>
            <i>Todo list</i>
          </ul>
        </Link>
        <Link to="/">
          {" "}
          <ul>
            <i>count</i>
          </ul>
        </Link>
      </>
      <Routes>
        <Route path="/" element={<CountComponent />} />
        <Route path="/todo" element={<TodosComponent />} />
      </Routes>
    </>
  );
}

export default App;
