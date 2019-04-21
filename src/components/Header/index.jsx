import React from "react";
import Btn from "../Btn";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header--h1">Ты готов стать профессионалом?</h1>
      <p className="Header--text">
        Мы ищем <span>талантов</span> и <span>саппортов</span> в команду. Решите
        на какую категорию вы претендуете.
      </p>
      <Btn>Заполнить анкету</Btn>
    </header>
  );
};

export default Header;
