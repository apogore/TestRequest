import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    localStorage.getItem("api") ||
    "https://artefomak-001-site1.ftempurl.com/api",
});

// const authenticate = async () => {
//   const Username = "11174512";
//   const Password = "60-dayfreetrial";
//   try {
//     const response = await axiosInstance.post(
//       "http://artefomak-001-site1.ftempurl.com",
//       { Username, Password }
//     );
//     const token = response.data.token; // Предполагаем, что сервер возвращает токен
//     console.log("Токен получен:", token);
//     // Сохраняем токен в localStorage
//     localStorage.setItem("token", token);
//     // Устанавливаем токен в заголовке запроса для дальнейших запросов
//     axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     return true; // Успешная аутентификация
//   } catch (error) {
//     console.error("Ошибка аутентификации:", error);
//     return false; // Ошибка аутентификации
//   }
// };

// await authenticate();

export const updateApiUrl = (newApiUrl) => {
  // Обновляем базовый URL Axios-инстанса
  axiosInstance.defaults.baseURL = newApiUrl;
  // Сохраняем новое значение базового URL в локальное хранилище
  localStorage.setItem("api", newApiUrl);
};

export default axiosInstance;

const authenticate = async (username, password) => {
    try {
        // Изменяем URL для аутентификации
        const loginEndpoint =       "http://artefomak-001-site1.ftempurl.com";
        const response = await axiosInstance.post(loginEndpoint, { username, password });
        const token = response.data.token; // Предполагаем, что сервер возвращает токен
        // Сохраняем токен в localStorage
        localStorage.setItem('token', token);
        // Устанавливаем токен в заголовке запроса для дальнейших запросов
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return true; // Успешная аутентификация
    } catch (error) {
        console.error('Ошибка аутентификации:', error);
        return false; // Ошибка аутентификации
    }
};


// Вызываем функцию аутентификации с вашими учетными данными
const username = '11174512';
const password = '60-dayfreetrial';
const isAuthenticated = await authenticate(username, password);

// Если аутентификация успешна, отправляем запросы на другие эндпоинты
if (isAuthenticated) {
    try {
        const response = await axiosInstance.get('other_endpoint');
        console.log('Ответ на запрос:', response.data);
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}
