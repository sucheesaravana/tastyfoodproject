import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Blogs from "./pages/Blogs";
import Recipes from "./pages/Recipes";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/write" element={<Write />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;