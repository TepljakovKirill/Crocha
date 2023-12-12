import { Helmet } from "react-helmet-async";

function LoginPage() {
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
          <form className="flex" onSubmit="onSubmit">
            <div className="field">
              <div>
                <label htmlFor="email">Полное имя:</label>
              </div>
              <input
                type="text"
                placeholder="Антонина Семёновна"
                name="email"
                required
              />
            </div>

            <div className="field">
              <div>
                <label htmlFor="password">Почта:</label>
              </div>
              <input
                placeholder="newuser@mokky.test"
                type="email"
                id="email"
                required
              />
            </div>

            <div className="field">
              <div>
                <label htmlFor="password">Пароль:</label>
              </div>
              <input
                placeholder="123456"
                type="password"
                id="password"
                required
              />
            </div>

            <button className="button-blue" type="submit">
              Зарегистрироваться
            </button>
          </form>

          <h2 id="status" className="error">
            Не зарегистрирован!
          </h2>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
