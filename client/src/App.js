import NavBar from './components/navbar/navbar';
import Forum from './components/forum/forum';
import { Routes, Route } from "react-router-dom";
import Catagories from "./components/forum/catagories/catagories";
import Allposts from "./components/forum/allposts/allposts";
import MyPosts from "./components/forum/myposts/myposts";

import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Forum />
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
