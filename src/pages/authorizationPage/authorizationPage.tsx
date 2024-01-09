import React from "react";
import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type TAuthorizationPageProps = {
  onAuthorization: () => void;
};

function AuthorizationPage({ onAuthorization }: TAuthorizationPageProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [happyShopping, setHappyShopping] = React.useState(false);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("https://e5405e6585f75326.mokky.dev/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (res.ok) {
      setHappyShopping(!false);
      onAuthorization();
      const json = await res.json();
      console.log(json);
    }
  };
  return (
    <>
      <Helmet>
        <title>Crocha - Страница авторизации</title>
      </Helmet>
      <div className="container">
        <div className="authorization flex">
          <p className="authorization-title">
            Для возможности заказа товаров в нашем интернет-магазине необходимо
            авторизоваться:)
          </p>
          <form id="authorization" className="flex" onSubmit={handleFormEvent}>
            <div className="field">
              <div>
                <label>
                  Почта:
                  <input
                    onChange={(e) => emailHandler(e)}
                    value={email}
                    placeholder="newuser@mokky.test"
                    type="email"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="field">
              <div>
                <label>
                  Пароль:
                  <input
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                    placeholder="******"
                    type="password"
                    required
                  />
                </label>
              </div>
            </div>

            <button className="button-blue" type="submit">
              Войти
            </button>
          </form>

          <p className="authorization-register">
            Если вы ещё не зарегистрировались на нашем сайте,
            <br /> то вам <Link to="/register">сюда</Link>
          </p>

          {happyShopping ? (
            <h2 className="authorization-greetings">Приятных покупок;)</h2>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default AuthorizationPage;
