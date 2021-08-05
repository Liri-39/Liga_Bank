import React from "react";

const Picture = ({webp, jpg}) => {
    return <picture className="slider__image">
        <source type="image/webp" srcSet={`${webp[0]} 1x, ${webp[1]} 2x`}/>
        <img src={jpg[0]}
             srcSet={`${jpg[0]} 1x, ${jpg[1]} 2x`} alt="Лига Банк.Кредиты на любой случай"/>
    </picture>
}

export default Picture;
