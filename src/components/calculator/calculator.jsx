import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    getCreditName,
    getCreditParams,
    getCreditType,
    getCreditRate,
    getRequestStatus,
    getCreditMinSum
} from "../../store/calculator/selectors";
import Offer from "../offer/offer";
import CalcStep1 from "../calc-step-1/calc-step-1";
import CalcStep2 from "../calc-step-2/calc-step-2";
import CalcStep3 from "../calc-step-3/calc-step-3";
import {
    changeCreditName,
    changeCreditType,
    getCreditInfo,
    setDefaultParam, setIsRequestSend
} from "../../store/action";
import {calcCreditSum, calcIncome, calcPayMonth, calcRate} from "../../utils";
import Message from "../message/message";

const Calculator = () => {
    const dispatch = useDispatch();
    const activeType = useSelector(getCreditType);
    const creditName = useSelector(getCreditName);
    const minSum = useSelector(getCreditMinSum);
    const requestStatus = useSelector(getRequestStatus);
    const creditParams = useSelector(getCreditParams);
    const creditRate = useSelector(getCreditRate);

    const sum = calcCreditSum(activeType, creditParams);
    const rate = calcRate(activeType, creditParams, creditRate);
    const payment = calcPayMonth(activeType, creditParams, sum, rate);
    const income = calcIncome(payment);


    const handleChangeTypeCredit = (evt) => {
        evt.preventDefault();
        dispatch(changeCreditType(evt.target.value));
        dispatch(changeCreditName(evt.target.value));
        dispatch(getCreditInfo(evt.target.value));
        dispatch(setDefaultParam(evt.target.value));
        dispatch(setIsRequestSend(false));
    }

    return <section className="container calc" id="calculator">
        <h2 className="calc__title">Кредитный калькулятор</h2>
        <div className="form">
            {<CalcStep1
                handleChangeTypeCredit={handleChangeTypeCredit}
                activeType={activeType}
                creditName={creditName}/>}
            {activeType > 0 && <CalcStep2/>}
            {requestStatus &&
            <CalcStep3
                id={activeType}
                sum={sum}/>
            }
            {(activeType > 0 && sum >= minSum) &&
            <Offer
                id={activeType}
                sum={sum}
                rate={rate}
                payment={payment}
                income={income}/>
            }
            {sum <= minSum &&
                <Message/>
            }
        </div>
    </section>
}

export default Calculator;
