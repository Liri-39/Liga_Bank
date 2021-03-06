import React, {Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import {priceFormat, periodInText} from "../../utils";
import {getCreditInfo, getCreditParams, getCreditType} from "../../store/calculator/selectors";
import {changeCreditParam} from "../../store/action";

const CalcStep2 = () => {
    const dispatch = useDispatch();
    const credit = useSelector(getCreditInfo);
    const creditType = useSelector(getCreditType);
    const creditParams = useSelector(getCreditParams);

    const handleInputTargetPrice = (evt) => {
        dispatch(changeCreditParam({
            targetPrice: Number(evt.target.value),
            initialFeeSum: (Number(evt.target.value) * credit.initialFee.min) / 100,
            initialFee: credit.initialFee.min
        }))
    }

    const handleCheckOption = (evt) => {
        dispatch(changeCreditParam({[evt.target.id]: !creditParams[evt.target.id]}));
    }

    const priceInc = (evt) => {
        const newTargetPrice = Number(creditParams.targetPrice + credit.values.step);
        dispatch(changeCreditParam({targetPrice: newTargetPrice}));
        dispatch(changeCreditParam({initialFeeSum: Number(newTargetPrice * creditParams.initialFee / 100)}));
    }

    const priceDec = (evt) => {
        const newTargetPrice = Number(creditParams.targetPrice - credit.values.step);
        const newInitialFeeSum = Number((newTargetPrice * creditParams.initialFee) / 100)
        dispatch(changeCreditParam({targetPrice: newTargetPrice}));
        dispatch(changeCreditParam({initialFeeSum: newInitialFeeSum}));
    }

    const handleInputFeeChange = (evt) => {
        let fee = (evt.target.value * 100) / creditParams.targetPrice;
        let feeSum = evt.target.value;
        if (fee < credit.initialFee.min) {
            fee = credit.initialFee.min;
            feeSum = creditParams.targetPrice * fee / 100
        }
        if (feeSum > creditParams.targetPrice) {
            feeSum = creditParams.targetPrice
            fee = (creditParams.targetPrice * 100) / creditParams.targetPrice;
        }

        dispatch(changeCreditParam({
            initialFeeSum: feeSum,
            initialFee: fee
        }))
    }

    const handleInputRangeFeeChange = (evt) => {
        dispatch(changeCreditParam({
            initialFeeSum: creditParams.targetPrice * evt.target.value / 100,
            initialFee: evt.target.value
        }))
    }

    const handleInputPeriodChange = (evt) => {
        let period =  evt.target.value;
        if (period > credit.creditPeriod.max) {
            period = credit.creditPeriod.max
        }
        if (period < credit.creditPeriod.min) {
            period = credit.creditPeriod.min
        }
        dispatch(changeCreditParam({creditPeriod: period}))
    }

    const handleInputRangePeriodChange = (evt) => {
        dispatch(changeCreditParam({
            creditPeriod: evt.target.value
        }))
    }

    return <div className="form__item form__item--step2">
        <h3 className="form__item-title form__item-title--step2">?????? 2. ?????????????? ?????????????????? ??????????????</h3>
        <div className="form__param-block">
            <label className="form__label"
                   htmlFor="targetPrice">?????????????????? {`${(creditType === 1) ? `????????????????????????` : `????????????????????`}`}</label>
            <div className="form__item-wrapper">
                <button className="form__button-input form__button-input--minus"
                        onClick={priceDec}
                />
                <input className="form__input"
                       type="number"
                       id="targetPrice"
                       name="targetPrice"
                       min={credit.values.min}
                       max={credit.values.max}
                       placeholder={`${priceFormat(creditParams.targetPrice)} ????????????`}
                       value={creditParams.targetPrice}
                       onChange={handleInputTargetPrice}
                       aria-label="?????????????????? ????????????????????????"/>
                <span className="form__error-message">???????????????????????? ????????????????</span>
                <button className="form__button-input form__button-input--plus"
                        onClick={priceInc}
                />
            </div>
            <span className="form__info">
            {`???? ${priceFormat(credit.values.min)} ???? ${priceFormat(credit.values.max)} ????????????`}
        </span>
        </div>
        <div className="form__param-block">
            <label className="form__label" htmlFor="initialFee">???????????????????????????? ??????????</label>
            <input className="form__input"
                   type="number"
                   id="initialFee"
                   name="initialFee"
                   min={(creditParams.targetPrice * credit.initialFee.min) / 100}
                   max={creditParams.targetPrice}
                   placeholder={`${priceFormat((creditParams.targetPrice * creditParams.initialFee) / 100)} ????????????`}
                   value={(creditParams.targetPrice * creditParams.initialFee) / 100}
                   onChange={handleInputFeeChange}
                   aria-label="???????????????????????????? ??????????"/>
            <label className="visually-hidden" htmlFor="initialFeeInPercent">???????????????????????????? ?????????? ?? %%</label>
            <input className="form__input"
                   type="range"
                   id="initialFeeInPercent"
                   name="initialFeeInPercent"
                   min={credit.initialFee.min}
                   max={100}
                   step={credit.initialFee.step}
                   value={creditParams.initialFee}
                   onInput={handleInputRangeFeeChange}
                   aria-label="???????????????????????????? ?????????? ?? %%"/>
            <div className="form__info form__info--range">
                <span>{creditParams.initialFee}%</span>
            </div>
        </div>
        <div className="form__param-block form__param-block--period">
            <label className="form__label" htmlFor="creditPeriod">???????? ????????????????????????</label>
            <input className="form__input"
                   type="number"
                   id="creditPeriod"
                   name="creditPeriod"
                   placeholder={creditParams.creditPeriod}
                   value={creditParams.creditPeriod}
                   onInput={handleInputPeriodChange}
                   aria-label="???????? ????????????????????????"/>
            <label className="visually-hidden" htmlFor="creditPeriodRange">???????? ????????????????????????</label>
            <input className="form__input form__input--period"
                   type="range"
                   id="creditPeriodRange"
                   name="creditPeriodRange"
                   min={credit.creditPeriod.min}
                   max={credit.creditPeriod.max}
                   step={credit.creditPeriod.step}
                   value={creditParams.creditPeriod}
                   onInput={handleInputRangePeriodChange}
                   aria-label="???????? ????????????????????????"/>
            <div className="form__info form__info--range">
                <span>{`${credit.creditPeriod.min} ${periodInText(credit.creditPeriod.min)}`}</span>
                <span>{credit.creditPeriod.max} ??????</span>
            </div>
        </div>
        <div className="form__param-block">
            {Object.entries(credit.options).map(([key, value]) =>
                <Fragment key={`option-${key}`}>
                    <input className="visually-hidden"
                           type="checkbox"
                           id={key}
                           name={key}
                           value={value.value}
                           onChange={handleCheckOption}
                           aria-label={value.text}/>
                    <label className="form__label form__label--option" htmlFor={key}>{value.text}</label>
                </Fragment>
            )}
        </div>
    </div>
}

export default CalcStep2;
