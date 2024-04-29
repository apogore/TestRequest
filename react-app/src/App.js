import React from "react";
import Navigator from "./Navigator";
import LoginPage from "./pages/login/LoginPages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Тесты-Хуесты на сервер</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Navigator />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <div style={{ textAlign: "center"}} > 
        <button style={{ 
      marginLeft: "20vw",
      marginTop: "10px",
      color: "white",
      border: "1px solid black",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          На главную
        </Link>
        </button>
        </div>
      </Router>
    </div>
  );
}

export default App;
