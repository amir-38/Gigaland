// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  // Инициализация состояния из localStorage, если оно существует
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Сохраняем в localStorage
      return newMode;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background-color-main", "#040836");
      root.style.setProperty("--background-color-second", "#1c205d");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--text-color-togl", "black");
      root.style.setProperty("--toggle-btn", "white");
    } else {
      root.style.setProperty("--background-color-main", "white");
      root.style.setProperty("--background-color-second", "#e4e5fd");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--text-color-togl", "white");
      root.style.setProperty("--toggle-btn", "#040836");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
