import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: localStorage.getItem('api') || "https://artefomak-001-site1.ftempurl.com/api",
});

const authenticate = () => {
    const username = '11174512';
    const password = '60-dayfreetrial';
    const token = btoa(`${username}:${password}`);
    axiosInstance.defaults.headers.common['Authorization'] = `Basic ${token}`;
};

// Вызываем функцию аутентификации при импорте модуля
authenticate();

export const updateApiUrl = (newApiUrl) => {
    // Обновляем базовый URL Axios-инстанса
    axiosInstance.defaults.baseURL = newApiUrl;
    // Сохраняем новое значение базового URL в локальное хранилище
    localStorage.setItem('api', newApiUrl);
};

export default axiosInstance;
