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
import ResetPassword from "./components/forum/reset/resetpassword";
import "./App.css";
import PersonalData from "./components/forum/MyProfile/personal";
import { getUsers } from "./action/user";
import Members from "./components/forum/members/members";
import MembersIndex from "./components/forum/members";
import CreatePost from "./components/forum/createpost/createpost";
import Post from "./components/forum/post/post";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getUsers());
  });

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/Catagory/:id" element={<CatagoryDetails />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<PersonalData />} />
        <Route path="/members" element={<MembersIndex />} />
        <Route path="/forum/createpost/:id" element={<CreatePost />} />
        <Route path="/forum/post" element={<Post />} />
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
