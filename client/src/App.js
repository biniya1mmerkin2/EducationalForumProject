import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Forum from "./components/forum/forum";
import Catagories from "./components/forum/catagories/catagories";
import Allposts from "./components/forum/allposts/allposts";
import MyPosts from "./components/forum/myposts/myposts";
import { getCategory } from "./action/getCatagory";
import { useDispatch } from "react-redux";
import Footer from "./components/footer/footer";
import CatagoryDetails from "./components/forum/catagoryDetail/catagorydetail";
import ForgetPassword from "./components/forum/reset/forgetpassword";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  });

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/Catagory/:id" element={<CatagoryDetails />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
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
