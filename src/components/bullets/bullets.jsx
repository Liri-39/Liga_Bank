import React from "react";
import PropTypes from "prop-types";

const Bullets = (props) => {
    return <div className={`bullets-block ${props.blockType}__bullets-block`}>
        { props.arr.map((item, index) =>
            <span className={`bullet ${Boolean(Number(props.activeIndex) === Number(index))? `bullet--active${props.isLight? `-light` : ``}` : ``}`}
                  key={` ${props.blockType}-${index}`}
            />
        )}

    </div>
}

Bullets.propTypes = {
    arr: PropTypes.array.isRequired,
    blockType: PropTypes.string.isRequired,
    activeIndex: PropTypes.number.isRequired,
    isLight: PropTypes.any.isRequired,
};
export default Bullets;
