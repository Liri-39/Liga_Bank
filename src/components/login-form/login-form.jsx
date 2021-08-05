import React from "react";
import Icons from "../icons/icons";

const LoginForm = () => {

    return <div className="modal visually-hidden" id="modal">
        <div className="modal__wrap">
            <div className="modal__logo">
                <a className="logo" href="#">
                    <Icons name='logo' width="151" height="31"/>
                </a>
            </div>
            <button className="modal__close"/>

            <div className="modal__form">
                <form action="#" id="modal-form">
                    <label htmlFor="login">Логин</label>
                    <input id="login" type="text" required=""/>

                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" required=""/>
                    <!-- Иконка -->
                    <svg width="22" height="12" id="show-password">
                        <use xlinkHref="#icon-view"/>
                    </svg>
                    <a href="#">Забыли пароль?</a>

                    <button className="btn modal__btn" type="submit">Войти</button>
                </form>
            </div>
        </div>
    </div>
}
