import React from "react";
import PropTypes from "prop-types";

const Option = (props) => {
    const handleEnterPress = (evt) => {
        if (evt.key === "Enter") {
            props.handleChangeTypeCredit(evt);
        }
    }

    return <>
        <input className="form__input-option visually-hidden"
               type="radio"
               name={`type-credit`}
               value={props.id}
               id={`type-credit-${props.id}`}
               checked={Boolean(props.id === props.type)}
               onKeyDown={handleEnterPress}
               onChange={()=>{}}
               onClick={props.handleChangeTypeCredit}
        />
        <label className="form__option"
               htmlFor={`type-credit-${props.id}`}
        >
            {props.name}
        </label>
    </>
}



export default Option;
