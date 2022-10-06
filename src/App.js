import "./App.css";
import Jewelery from "./Categery/Jewelery";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManCollection from "./Categery/ManCollection";
import WomanCollection from "./Categery/WomanCollection";
import Electronics from "./Categery/Electronic";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Product />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/men" element={<ManCollection />} />
          <Route path="/woman" element={<WomanCollection />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
