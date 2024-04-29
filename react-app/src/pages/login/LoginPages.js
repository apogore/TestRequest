import React, { useState } from 'react';
import axiosInstance from '../../api/axios';

const LOGIN_URL = '/login';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [fullMessage, setFullMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const jsonData = JSON.stringify({
        login: username,
        password,
      });
      const response = await axiosInstance.post(LOGIN_URL, jsonData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      setSuccess("Успешно!\n"+response.data);
      setFullMessage("Ответ от сервера: " + response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response?.data);
      if (err.code === "ERR_NETWORK") { 
        setError("Ошибка CORS: запрос был заблокирован из-за политики безопасности CORS. Подробнее в логах.");
      } else {
        setError(err.response.data); // Предположим, что данные об ошибке доступны в response.data
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Тест логина</h2>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button
        onClick={handleLogin}
        style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Войти
      </button>
      {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {fullMessage && <div style={{ color: 'black', marginTop: '10px' }}>{fullMessage}</div>}
    </div>
  );
};

export default LoginPage;
