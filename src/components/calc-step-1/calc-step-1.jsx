import React, {useState} from "react";
import {CreditTypes} from "../../const";
import Option from "../option/option";

const CalcStep1 = (props) => {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleClickSelect = (evt) => {
        evt.preventDefault();
        setIsOptionsOpen(!isOptionsOpen);
    }

    const handleKeyDownSelect = (evt) => {
        evt.preventDefault();
        if (evt.key === `Enter`) {
            setIsOptionsOpen(!isOptionsOpen);
        }
    }

    const handleChangeType = (evt) => {
        props.handleChangeTypeCredit(evt);
        setIsOptionsOpen(!isOptionsOpen);
    }

    return <div className="form__item form__item--step1">
        <h3 className="form__item-title">Шаг 1. Цель кредита</h3>
        <button className={`form__select ${isOptionsOpen ? `form__select--active` : ``}`}
                onClick={handleClickSelect}
                onKeyDown={handleKeyDownSelect}
                aria-label="Выберите цель кредита"
        >
            {`${props.activeType === 0 ? `Выберите цель кредита` : props.creditName}`}
        </button>
        {isOptionsOpen &&
        <div className="form__option-wrapper">
            {CreditTypes.map((value, key) =>
                <Option key={`options-${key}`}
                        type={props.activeType}
                        handleChangeType={handleChangeType}
                        id={value.id}
                        name={value.name}
                />
            )}
        </div>
        }
    </div>
}

export default CalcStep1;
