import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    localStorage.getItem("api") ||
    "http://teamcraft.somee.com/api",
});

export const updateApiUrl = (newApiUrl) => {
  // Обновляем базовый URL Axios-инстанса
  axiosInstance.defaults.baseURL = newApiUrl;
  // Сохраняем новое значение базового URL в локальное хранилище
  localStorage.setItem("api", newApiUrl);
};

export default axiosInstance;
