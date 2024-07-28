import React from "react";
import Icons from "../icons/icons"

const Footer = () => {
    return <footer className="page__footer page-footer">
        <div className="container page-footer__wrapper">
            <div className="page-footer__info">
                <h2 className="visually-hidden">Общая информация</h2>
                <a className="logo page-footer__logo" href="/" aria-label="on top link">
                    <Icons name="logo" width="150" height="30"/>
                </a>
                <div className="page-footer__address">
                    <span className="page-footer__address-item">150015, г. Москва, ул. Московская, д. 32</span>
                    <span className="page-footer__address-item">Генеральная лицензия Банка России №1050</span>
                    <span className="page-footer__address-item">Ⓒ Лига Банк, 2019</span>
                </div>
            </div>
            <h2 className="visually-hidden">Навигация по сайту</h2>
            <ul className="page-footer__nav">
                <li className="page-footer__nav-item">
                    <a href="/">Услуги</a>
                </li>
                <li className="page-footer__nav-item">
                    <a href="/">Рассчитать кредит</a>
                </li>
                <li className="page-footer__nav-item">
                    <a href="/">Контакты</a>
                </li>
                <li className="page-footer__nav-item">
                    <a href="/">Задать вопрос</a>
                </li>
            </ul>
            <div className="contact page-footer__contact">
                <h2 className="visually-hidden">Контактные телефоны</h2>
                <ul className="contact__list">
                    <li className="contact__item contact__item--mobile">
                        <a className="contact__item-phone contact__item-phone--short" href="tel:0904">*0904</a>
                        <p className="contact__item-desc">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
                    </li>
                    <li className="contact__item contact__item--phone">
                        <a className="contact__item-phone contact__item-phone--long" href="tel:88001112233">8 800 111 22
                            33</a>
                        <p className="contact__item-desc">Бесплатный для всех городов России</p>
                    </li>
                </ul>
            </div>
            <div className="social page-footer__social">
                <h2 className="visually-hidden">Ссылки на социальные сети</h2>
                <ul className="social__nav">
                    <li className="social__nav-item">
                        <a className="social__nav-link" href="/" aria-label="facebook link">
                            <span className="visually-hidden">facebook</span>
                            <Icons name="ico-fb" width="9" height="16"/>
                        </a>
                    </li>
                    <li className="social__nav-item">
                        <a className="social__nav-link" href="/" aria-label="instagram link">
                            <span className="visually-hidden">instagram</span>
                            <Icons name="ico-inst" width="16" height="16"/>
                        </a>
                    </li>
                    <li className="social__nav-item">
                        <a className="social__nav-link" href="/" aria-label="twitter link">
                            <span className="visually-hidden">twitter</span>
                            <Icons name="ico-tw" width="16" height="13"/>
                        </a>
                    </li>
                    <li className="social__nav-item">
                        <a className="social__nav-link" href="/" aria-label="youtube link">
                            <span className="visually-hidden">youtube</span>
                            <Icons name="ico-yt" width="16" height="13"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
};

export default Footer;
