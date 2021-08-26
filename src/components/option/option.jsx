import React from "react";
import PropTypes from "prop-types";

const Option = (props) => {

    return <>
        <input className="form__input-option visually-hidden"
               type="radio"
               name={`type-credit`}
               value={props.id}
               id={`type-credit-${props.id}`}
               checked={Boolean(props.id === props.type)}
               onChange={props.onChangeType}
        />
        <label className="form__option"
               htmlFor={`type-credit-${props.id}`}
        >
            {props.name}
        </label>
    </>
}

Option.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChangeType: PropTypes.func.isRequired,
}.isRequired;

export default Option;
