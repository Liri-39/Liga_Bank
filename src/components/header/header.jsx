import React, {useState} from "react";
import {useSelector} from "react-redux";
import Icons from "../icons/icons";
import {menu} from "../../mocks/menu";
import {getIsLoginStatus} from "../../store/main/selectors";

const Header = (props) => {

    const isLogin = useSelector(getIsLoginStatus);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClickMenuButton = (evt) => {
        evt.preventDefault();
        setIsMenuOpen(true);
    }

    const handleClickCloseButton = (evt) => {
        evt.preventDefault();
        setIsMenuOpen(false);
    }

    return <header className={`page__header page-header ${isMenuOpen? `mobile-menu` : ``}`}>
        <div className={`container page-header__wrapper ${isMenuOpen? `mobile-menu__wrapper` : ``}`}>
            <button
                className="page-header__menu-button"
                onClick={handleClickMenuButton}
            >
                <span/>
            </button>
            <a href="/" className="logo page-header__logo" aria-label="Логотип Лига Банк">
                <Icons name='logo' width="115" height="17"/>
            </a>
            {isMenuOpen && <button className="mobile-menu__close-button"
                                   onClick={handleClickCloseButton}/>}
            <nav className={`nav-side page-header__nav ${isMenuOpen ? `mobile-menu__nav` : ``}`}>
                <h2 className="visually-hidden">Навигация по сайту</h2>
                <ul className={`nav-side__list ${isMenuOpen ? `mobile-menu__list` : ``}`}>
                    {menu.map((item, index) =>
                    <li className={`nav-side__list-item ${isMenuOpen ? `mobile-menu__item` : ``}`} key={`title-${index}`}>
                        <a href={item.link}>{item.name}</a>
                    </li>)}
                </ul>
            </nav>
            <h2 className="visually-hidden">Вход в Интернет-банк</h2>
            <ul className={`nav-user page-header__nav-user ${isMenuOpen ? `mobile-menu__nav-user`: ``}`}>
                <li className={`${isMenuOpen ? `mobile-menu__item` : ``}`}>
                    <a className={`nav-user__login ${isMenuOpen ? `mobile-menu__login` : ``}`}
                       onClick={props.handleClickLoginLink}
                       href="/"
                    >
                        <span>{`${isLogin ? `Выйти из Интернет-банка` : `Войти в Интернет-банк`}`}</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
};

export default Header;
