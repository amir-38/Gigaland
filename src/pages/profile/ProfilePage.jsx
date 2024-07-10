import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Импортируйте Link из react-router-dom
import axios from "axios";
import "./Profile.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Получите ID из параметров маршрута

  useEffect(() => {
    // console.log(`Fetching data for user ID: ${id}`);
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        console.log("User data:", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-page">
      <h1>{user.name}</h1>
      <img
        src={user.image || "../../../src/assets/images/author-1.jpg"}
        alt="profile"
      />
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Balance: $4,823</p> {/* Замените на фактический баланс или удалите */}
      {/* Кнопка для редактирования профиля */}
      <Link to={`/edit/${id}`}>
        <button className="edit-button">Edit Profile</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
