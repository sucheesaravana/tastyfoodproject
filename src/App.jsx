import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Pastha from "./Pages/Pastha";
import Recipes from "./Pages/Recipes";
import Write from "./Pages/Write";
import Profile from "./Pages/Profile";
import WritePost from "./Pages/WritePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Pastha" element={<Pastha />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/WritePost" element={<WritePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;