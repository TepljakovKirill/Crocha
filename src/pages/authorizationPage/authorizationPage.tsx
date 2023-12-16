import React from "react";
import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";

function AuthorizationPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleFormEvent = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("https://e5405e6585f75326.mokky.dev/auth", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });


        if (res.ok) {
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
                    <form className="flex" onSubmit={handleFormEvent}>

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
                            Войти
                        </button>
                    </form>

                    <h2 id="status" className="error">Приятных покупок;)</h2>

                    <pre id="jsonPre"></pre>
                </div>
            </div>
        </>
    );
}

export default AuthorizationPage;