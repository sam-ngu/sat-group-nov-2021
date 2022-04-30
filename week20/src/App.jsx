import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About/>} />

        </Routes>
      </MainLayout>


    </BrowserRouter>
    
  );
}

export default App;
