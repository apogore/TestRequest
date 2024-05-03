import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToTeams = () => {
    navigate("/teams");
  };

  const navigateToHobbies = () => {
    navigate("/hobbies");
  };
  const navigateToOwnGet = () => {
    navigate("/ownget");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Выбери тест</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>
              <button
                onClick={navigateToLogin}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "1px solid black",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Логин
              </button>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid black",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "not-allowed",
                }}
                disabled
              >
                Регистрация
              </button>
              <button
                onClick={navigateToTeams}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "1px solid black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    marginRight: "10px",
                    cursor: "not-allowed",
                  }}
                disabled
              >
                Команды
              </button>
              <button
                onClick={navigateToHobbies}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "1px solid black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    marginRight: "10px",
                    cursor: "not-allowed",
                  }}
                disabled
              >
                Хобби
              </button>
            </td>
          </tr>
          <tr>
          <button
                onClick={navigateToOwnGet}
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "1px solid black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
              >
                Собственный GET запрос
              </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NavigationPage;
