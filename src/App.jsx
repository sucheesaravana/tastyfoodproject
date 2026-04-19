import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Recipes from "./Pages/Recipes";
import Write from "./Pages/Write";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;