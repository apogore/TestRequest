// api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: localStorage.getItem('api') || "http://artefomak-001-site1.ftempurl.com/api",
})

axiosInstance.defaults.headers.common['Authorization'] = 'Basic ' + btoa('11174512:60-dayfreetrial');

export const updateApiUrl = (newApiUrl) => {
    // Обновляем базовый URL Axios-инстанса
    axiosInstance.defaults.baseURL = newApiUrl;
    // Сохраняем новое значение базового URL в локальное хранилище
    localStorage.setItem('api', newApiUrl);
}

export default axiosInstance;
