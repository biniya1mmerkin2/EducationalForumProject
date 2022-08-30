import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Forum from "./components/forum/forum";
import Catagories from "./components/forum/catagories/catagories";
import Allposts from "./components/forum/allposts/allposts";
import MyPosts from "./components/forum/myposts/myposts";
import PostCatagory from "./components/postcatagory/postcatagory";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/postCatagory" element={<PostCatagory />} />
      </Routes>

      <Routes>
        <Route path="/forum" element={<Catagories />} />
        <Route path="/forum/allposts" element={<Allposts />} />
        <Route path="/forum/myposts" element={<MyPosts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
