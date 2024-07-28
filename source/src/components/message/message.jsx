import React from "react";
import {useSelector} from "react-redux";
import {getCreditMinSum, getCreditType} from "../../store/calculator/selectors";
import {priceFormat} from "../../utils";

const Message = () => {
    const activeType = useSelector(getCreditType);
    const minSum = useSelector(getCreditMinSum);

    return <div className="form__message calc__message">
            <p>{`Наш банк не выдаёт ${(activeType === 1) ? `ипотечные кредиты` : `автокредиты`}  меньше ${priceFormat(minSum)} рублей.`}</p>
            <span>Попробуйте использовать другие параметры для расчёта.</span>
        </div>
}

export default Message;
