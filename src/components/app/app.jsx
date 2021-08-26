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

    const handleClickLoginLink = (evt) => {
        evt.preventDefault();
        setIsLoginFormOpen(true);
    }

    const handleLoginFormClose = (evt) => {
        evt.preventDefault();
        setIsLoginFormOpen(false);
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            setIsLoginFormOpen(false);
        }
    }

    const handleLoginFormSubmit = (evt) => {
        evt.preventDefault();
        dispatch(setIsLoginSuccess(true));
        setIsLoginFormOpen(false);
    }

    return <>
        {isLoginFormOpen &&
        <LoginForm handleLoginFormClose={handleLoginFormClose}
                   handleLoginFormSubmit={handleLoginFormSubmit}
                   handleEscKeyPress={handleEscKeyPress}/>
        }
        {isOrderSuccess &&
        <PopUp/>
        }
        {<Header handleClickLoginLink={handleClickLoginLink}/>}
        {<Main/>}
        {<Footer/>}
    </>
};

export default App;
