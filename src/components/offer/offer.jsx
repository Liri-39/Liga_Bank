import React from "react";
import PropTypes from "prop-types";
import {priceFormat} from "../../utils";
import {useDispatch, useSelector} from "react-redux";
import {getOrderNum} from "../../store/calculator/selectors";
import {setIsRequestSend, setOrderNum} from "../../store/action";

const Offer = (props) => {

    const dispatch = useDispatch();
    const num = useSelector(getOrderNum);

    const handleClick = (evt) => {
        evt.preventDefault();
        dispatch(setIsRequestSend(true));
        dispatch(setOrderNum(num+1));
    }

    return <div className="form__offer offer">
        <h3 className="offer__title">Наше предложение</h3>

        <div className="offer__item">
            <p className="offer__item-value">{`${priceFormat(props.sum)} рублей`}</p>
            <span className="offer__item-title">Сумма {`${(props.id === 1) ? `ипотеки`: `автокредита`}`}</span>
        </div>

        <div className="offer__item">
            <p className="offer__item-value">{`${props.rate}%`}</p>
            <span className="offer__item-title">Процентная ставка</span>
        </div>

        <div className="offer__item">
            <p className="offer__item-value">{`${priceFormat(props.payment)} рублей`}</p>
            <span className="offer__item-title">Ежемесячный платеж</span>
        </div>

        <div className="offer__item">
            <p className="offer__item-value">{`${priceFormat(props.income)} рублей`}</p>
            <span className="offer__item-title">Необходимый доход</span>
        </div>

        <button className="button offer__button"
                onClick={handleClick}
        >Оформить заявку</button>
    </div>
}

Offer.propTypes = {
    sum: PropTypes.number.isRequired,
    payment: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired
};

export default Offer;
