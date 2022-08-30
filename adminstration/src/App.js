import React, { useEffect } from "react";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import { useDispatch } from "react-redux";
import { getCatagory } from "./action/post";
import { Routes, Route } from "react-router-dom";
import PostCatagory from "./components/post/postcatagory/postcatagory";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatagory());
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostCatagory />} />
      </Routes>
    </>
  );
}

export default App;
