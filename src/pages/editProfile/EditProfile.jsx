import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Импортируйте useParams для получения ID из URL
import "./EditProfile.css";
import axios from "axios";

const EditProfile = () => {
  const { id } = useParams(); // Получите ID из параметров маршрута
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Загрузите данные пользователя при монтировании компонента
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        const { name, email, username, phone } = response.data;
        setName(name);
        setEmail(email);
        setUsername(username);
        setPhone(phone);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных пользователя", error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Обновление данных пользователя без фото
    const data = {
      name,
      email,
      username,
      phone,
    };

    try {
      await axios.put(`http://localhost:3000/users/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Профиль обновлён успешно!");
    } catch (error) {
      console.error("Ошибка при обновлении профиля", error);
      alert("Произошла ошибка при обновлении профиля.");
    }
  };

  return (
    <div className="edit">
      <h1>Редактирование Профиля</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Обновить профиль
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
