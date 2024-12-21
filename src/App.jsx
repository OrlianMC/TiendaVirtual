import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Products from './pages/Products.jsx';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
         <MainApp />
      </BrowserRouter>
    </div>
  );
}

function MainApp() {
  return (
    <div className="app">
      <div className="flexProperty">
        <div className="appContainer">
            <Navbar />
          <div className="appContent">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;