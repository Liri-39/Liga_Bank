import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCreditParams, getCreditType, getOrderNum} from "../../store/calculator/selectors";
import {addZero, priceFormat, periodInText} from "../../utils"
import {ORDER_LENGTH} from "../../const";
import InputMask from "react-input-mask";
import {setIsOrderSuccess} from "../../store/action";

const CalcStep3 = () => {
    const dispatch = useDispatch();
    const num = useSelector(getOrderNum);
    const activeType = useSelector(getCreditType);
    const creditParams = useSelector(getCreditParams);

    const [order, setOrder] = useState({
        user: localStorage.user ? localStorage.getItem('user') : ``,
        tel: localStorage.tel ? localStorage.getItem('tel') : ``,
        mail: localStorage.mail ? localStorage.getItem('mail') : ``,
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(setIsOrderSuccess(true));
    }

    const handleFormInputChange = (evt) => {
        localStorage.setItem(evt.target.id, evt.target.value);
        setOrder({
            ...order,
            [evt.target.id]: evt.target.value,
        });
    };


    return <div className="form__item form__item--step3">
        <h3 className="form__item-title">Шаг 3. Оформление заявки</h3>

        <div className="form__request-wrap">
            <div className="form__request-item">
                <p>Номер заявки</p>
                <span>{`№ ${addZero(num, ORDER_LENGTH)}`}</span>
            </div>

            <div className="form__request-item">
                <p>Цель кредита</p>
                <span>{`${(activeType === 1) ? `Ипотека` : `Автокредит`}`}</span>
            </div>

            <div className="form__request-item">
                <p>{`Стоимость ${(activeType === 1) ? `недвижимости` : `автомобиля`}`}</p>
                <span>{`${priceFormat(creditParams.targetPrice)} рублей`}</span>
            </div>

            <div className="form__request-item">
                <p>Первоначальный взнос</p>
                <span>{`${priceFormat(creditParams.initialFeeSum)} рублей`}</span>
            </div>

            <div className="form__request-item">
                <p>Срок кредитования</p>
                <span>{`${creditParams.creditPeriod} ${periodInText(creditParams.creditPeriod)}`}</span>
            </div>
        </div>

        <form className="form__request-form"
              action="#"
              method="post"
              onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="user" aria-label="ФИО"/>
            <input className="form__input form__input--request"
                   type="text"
                   name="user"
                   id="user"
                   value={order.user}
                   autoFocus
                   onChange={handleFormInputChange}
                   placeholder="ФИО"
                   required/>

            <label className="visually-hidden" htmlFor="tel" aria-label="Телефон"/>
            <InputMask className="form__input form__input--request"
                       id="tel"
                       type="tel"
                       value={order.tel}
                       onChange={handleFormInputChange}
                       placeholder="Телефон"
                       mask="+7 (999) 999-99-99"
                       required/>

            <label className="visually-hidden" htmlFor="mail" aria-label="Адрес электронной почты"/>
            <input className="form__input form__input--request"
                   id="mail"
                   type="email"
                   value={order.mail}
                   onChange={handleFormInputChange}
                   placeholder="E-mail"
                   required/>

            <button className="btn form__button form__button--request"
                    type="submit"
                    onSubmit={handleSubmit}>
                Отправить
            </button>
        </form>
    </div>
}

export default CalcStep3;
