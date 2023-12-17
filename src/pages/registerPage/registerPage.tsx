import React from "react";
import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [register, setRegister] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleFormEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("https://e5405e6585f75326.mokky.dev/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: name,
        email: email,
        password: password
      })
    });


    if (res.ok) {
      setRegister(!false)
      const json = await res.json();
      console.log(json);
    }

  };
  return (
    <>
      <Helmet>
        <title>Crocha - Страница регистрации</title>
      </Helmet>
      <div className="container">
        <div className="authorization flex">
          <p className="authorization-title">
            Для возможности заказа товаров в нашем интернет-магазине необходима
            регистрация:)
          </p>
          <form className="flex" onSubmit={handleFormEvent}>
            <div className="field">
              <div>
                <label>Полное имя:</label>
              </div>
              <input
                onChange={(e) => nameHandler(e)}
                value={name}
                type="text"
                placeholder="Антонина Семёновна"
                required
              />
            </div>

            <div className="field">
              <div>
                <label>Почта:</label>
              </div>
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                placeholder="newuser@mokky.test"
                type="email"
                required
              />
            </div>

            <div className="field">
              <div>
                <label>Пароль:</label>
              </div>
              <input
                onChange={(e) => passwordHandler(e)}
                value={password}
                placeholder="******"
                type="password"
                required
              />
            </div>

            <button className="button-blue" type="submit">
              Зарегистрироваться
            </button>
          </form>

          {register ? <p className="authorization-status">Зарегистрирован!<br />Теперь <Link to="/authorization">войдите</Link> в магазин!</p> : ""}

        </div>
      </div>
    </>
  );
}

export default RegisterPage;
