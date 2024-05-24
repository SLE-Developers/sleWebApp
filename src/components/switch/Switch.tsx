"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./styles.css"

export const Switch = () => {
  const [theme, setTheme] = useState("light"); // Estado por defecto
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkScheme ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (!isMounted) {
    return null; // O un componente de carga si prefieres
  }

  return (
    <div className="switch">
      <button
        onClick={handleChangeTheme}
      >
        <FaMoon className={theme === "light" ? "visible" : "invisible"} />
        <FaSun className={theme === "light" ? "invisible" : "visible"} />
      </button>
    </div>
  );
};
