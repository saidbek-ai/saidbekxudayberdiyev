import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
// import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/login" element={<LoginRegister form={true} />} />
        <Route path="/register" element={<LoginRegister form={false} />} /> */}
        {/* <Route path="/projects/:id" /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
