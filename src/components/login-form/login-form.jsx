import React, {useState} from "react";
import Icons from "../icons/icons";

const LoginForm = (props) => {
    const [formField, setFormField] = useState({
        login: localStorage.login ? localStorage.getItem('login') : ``,
        password: localStorage.password ? localStorage.getItem('password') : ``
    });

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleChangeInput = (evt) => {
        localStorage.setItem(evt.target.id, evt.target.value);
        setFormField({
            ...formField,
            [evt.target.id]: evt.target.value,
        });
    };

    const handleClick = (evt) => {
        evt.preventDefault();
        setIsShowPassword(!isShowPassword);
    }

    return <div className="login-form" onKeyDown={props.handleEscKeyPress}>
        <div className="login-form__wrap">
            <a className="login-form__logo" href="">
                <Icons name='logo-form' width="150" height="27"/>
            </a>

            <button className="login-form__close"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={props.handleLoginFormClose}
            />

            <form className="login-form__form" action="#" id="modal-form" method="post" onSubmit={props.handleLoginFormSubmit}>
                <label className="login-form__label" htmlFor="login">Логин</label>
                <input className="login-form__login"
                       id="login"
                       name="login"
                       value={formField.login}
                       type="text"
                       autoFocus
                       required
                       onChange={handleChangeInput}
                />

                <label className="login-form__label" htmlFor="password">Пароль
                <input className="login-form__password"
                       id="password"
                       type={`${isShowPassword ? `text` : `password`}`}
                       value={formField.password}
                       onChange={handleChangeInput}
                       required/>
                <button className="login-form__password-button"
                        type="button"
                        onClick={handleClick}/>
                <a className="login-form__hint" href="#">Забыли пароль?</a></label>

                <button className="button login-form__button"
                        type="submit"
                        onSubmit={props.handleLoginFormSubmit}
                >Войти</button>
            </form>
        </div>
    </div>
}

export default LoginForm;
