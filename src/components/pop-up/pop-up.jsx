import React from "react";
import {useDispatch} from "react-redux";
import {changeCreditType, setIsOrderSuccess, setIsRequestSend} from "../../store/action";

const PopUp = () => {
    const dispatch = useDispatch();

    const handleFormClose = (evt) => {
        evt.preventDefault();
        dispatch(changeCreditType(0));
        dispatch(setIsRequestSend(false));
        dispatch(setIsOrderSuccess(false));
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            dispatch(changeCreditType(0));
            dispatch(setIsRequestSend(false));
            dispatch(setIsOrderSuccess(false));
        }
    }

    return <div className="calc__overlay" onKeyDown={handleEscKeyPress}>
        <div className="calc__overlay-content">
            <button className="calc__overlay-button"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={handleFormClose}
            />
            <p>Спасибо за обращение в наш банк.</p>
            <span>Наш менеджер скоро свяжется с вами по указанному номеру телефона.</span>
        </div>
    </div>
}

export default PopUp;
