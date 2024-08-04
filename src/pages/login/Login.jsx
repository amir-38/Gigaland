import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправка данных на сервер
    axios
      .post("http://localhost:3000/users", {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        // Очистка полей формы
        setFormData({
          username: "",
          password: "",
        });
        // Показ алерта об успешном логине
        alert("Login successful!");
        navigate("/home"); // Переход на домашнюю страницу или другую нужную страницу
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
        alert("Login failed. Please check your username and password.");
      });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
