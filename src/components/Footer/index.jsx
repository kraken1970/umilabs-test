import React, { useState } from "react";

import "./Footer.scss";

const Footer = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");

  function onLoginChange(e) {
    setLogin(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onTelChange(e) {
    setTel(e.target.value);
  }

  function onTextChange(e) {
    setText(e.target.value);
  }

  function clearValues() {
    setLogin("");
    setEmail("");
    setTel("");
    setText("");
  }

  function onSubmit(e) {
    e.preventDefault();
    alert(`${login}, добро пожаловать! Дальше нужен backend`);
    clearValues();
  }

  return (
    <footer className="Footer">
      <h2>Теперь расскажите о себе</h2>

      <form onSubmit={onSubmit} className="Footer__form">
        <div className="form--item">
          <label htmlFor="login">Фамилия и имя</label>
          <input
            className="form-input"
            required
            id="login"
            type="text"
            name="login"
            placeholder="Сидоров Александр"
            value={login}
            onChange={onLoginChange}
          />
        </div>

        <div className="form--item">
          <label htmlFor="email">Электронная почта</label>
          <input
            className="form-input"
            required
            id="email"
            type="email"
            name="email"
            placeholder="Sidorov@yandex.ru"
            value={email}
            onChange={onEmailChange}
          />
        </div>

        <div className="form--item">
          <label htmlFor="tel">Телефон</label>
          <input
            className="form-input"
            required
            id="tel"
            type="tel"
            name="tel"
            value={tel}
            placeholder="+7 (999)-328-14-20"
            onChange={onTelChange}
          />
        </div>

        <div className="form--item">
          <label htmlFor="text">
            Какой деятельностью, не связанной с текущими проектами, вы бы хотели
            заниматься в рабочее время?
          </label>
          <textarea
            className="form-input"
            required
            id="text"
            name="text"
            row="20"
            col="20"
            value={text}
            onChange={onTextChange}
            placeholder="Свой проект по созданию универсальной инфраструктуры строительства"
          />
        </div>

        <button className="Btn Footer--btn" type="submit">
          Отправить
        </button>
      </form>
    </footer>
  );
};

export default Footer;
