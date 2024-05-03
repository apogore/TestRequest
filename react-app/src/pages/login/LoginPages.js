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
      setError(err.message);
      setFullMessage(JSON.stringify(err));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Тест логина</h2>
      <form onSubmit={handleLogin}> 
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
        type="submit"
        style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Войти
      </button>
      </form>
      
      {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {fullMessage && <div style={{ color: 'black', marginTop: '10px', textAlign: 'left' }}>{fullMessage}</div>}
    </div>
  );
};

export default LoginPage;
