import React from "react";
import IconsSVG from "../../img/sprite.svg"

const Icons = ({name, width, height}) => {
    return(
        <svg width={width} height={height}>>
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
};

export default Icons;
