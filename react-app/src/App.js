import React from "react";
import Navigator from "./Navigator";
import LoginPage from "./pages/login/LoginPages";
import OwnGet from "./pages/OwnGet";
import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { updateApiUrl } from "./api/axios";

function App() {
  const initialApiUrl = "https://artefomak-001-site1.ftempurl.com/api";
  const [newApiUrl, setNewApiUrl] = useState(() => {
    // Используем localStorage для сохранения значения newApiUrl при загрузке компонента
    return localStorage.getItem("api") || initialApiUrl;
  });

  const handleChange = (e) => {
    setNewApiUrl(e.target.value);
  };

  const handleSave = () => {
    // Вызываем функцию для обновления базового URL
    updateApiUrl(newApiUrl);
    localStorage.setItem("api", newApiUrl);
    // Перезагружаем страницу, чтобы применить изменения
    window.location.reload();
  };
  const handleReset = () => {
    localStorage.clear();
    updateApiUrl(initialApiUrl);
    setNewApiUrl(initialApiUrl);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Тесты-Хуесты на сервер</h1>
      <Router>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            value={newApiUrl}
            onChange={handleChange}
            style={{ width: "350px", marginBottom: "10px", padding: "8px" }}
          />
          <button
            id="save"
            onClick={handleSave}
            style={{
              marginLeft: "1vw",
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Сохранить
          </button>
          <button
            style={{
              marginLeft: "1vw",
              backgroundColor: "gray",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleReset}
          >Сбросить</button>
        </div>
        <Routes>
          <Route path="/" element={<Navigator />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ownget" element={<OwnGet />} />
        </Routes>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button
              style={{
                marginLeft: "20vw",
                marginTop: "10px",
                color: "black",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              На главную
            </button>
          </Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
