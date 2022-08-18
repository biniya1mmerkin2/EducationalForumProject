import NavBar from './components/navbar/navbar';
import Forum from './components/forum/forum';
import { Routes, Route } from "react-router-dom";
import Catagories from "./components/catagories/catagories";
import Allposts from "./components/allposts/allposts";
import MyPosts from "./components/myposts/myposts";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Forum />
      <Routes>
        <Route path="/" element={<Catagories />} />
        <Route path="/allposts" element={<Allposts />} />
        <Route path="/myposts" element={<MyPosts />} />
      </Routes>
    </>
  );
}

export default App;
