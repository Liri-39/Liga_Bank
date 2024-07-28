import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../../sass/style.scss";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import PopUp from "../pop-up/pop-up";
import LoginForm from "../login-form/login-form";
import {getOrderStatus} from "../../store/calculator/selectors";
import {setIsLoginSuccess} from "../../store/action";

const App = () => {

    const dispatch = useDispatch();
    const isOrderSuccess = useSelector(getOrderStatus);

    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const onClickLoginLink = (evt) => {
        evt.preventDefault();
        setIsLoginFormOpen(true);
    }

    const onLoginFormClose = (evt) => {
        evt.preventDefault();
        setIsLoginFormOpen(false);
    }

    const onEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            setIsLoginFormOpen(false);
        }
    }

    const onLoginFormSubmit = (evt) => {
        evt.preventDefault();
        dispatch(setIsLoginSuccess(true));
        setIsLoginFormOpen(false);
    }

    return <>
        {isLoginFormOpen &&
        <LoginForm onLoginFormClose={onLoginFormClose}
                   onLoginFormSubmit={onLoginFormSubmit}
                   onEscKeyPress={onEscKeyPress}/>
        }
        {isOrderSuccess &&
        <PopUp/>
        }
        {<Header onClickLoginLink={onClickLoginLink}/>}
        {<Main/>}
        {<Footer/>}
    </>
};

export default App;
