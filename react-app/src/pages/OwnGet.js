import React, { useState } from "react";
import axiosInstance from "../api/axios";

const OwnGet = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [fullMessage, setFullMessage] = useState(null);

  const handleGet = async () => {
    try {
      const response = await axiosInstance.get();
      console.log(response);
      setSuccess("Успешно!\n" + response.data);
      setFullMessage("Ответ от сервера: " + JSON.stringify(response.data));
    } catch (err) {
      console.log(err);
      setError(err.message);
      setFullMessage(JSON.stringify(err));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Тест GET запроса</h2>
      <h4>
        Введи конкретную ссылку на GET запрос, СОХРАНИ и нажимай кнопку
        "Выполнить"
      </h4>
      <button
        onClick={handleGet}
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Выполнить
      </button>
      {success && (
        <div style={{ color: "green", marginTop: "10px" }}>{success}</div>
      )}
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      {fullMessage && (
        <div style={{ color: "black", marginTop: "10px", textAlign: "left" }}>
          {fullMessage}
        </div>
      )}
    </div>
  );
};

export default OwnGet;
