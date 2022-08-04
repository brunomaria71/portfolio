import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/NavBar";
import Who from "./components/Who";
import Work from "./components/Work";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/who" element={<Who />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
