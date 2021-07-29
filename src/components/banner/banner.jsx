import React, {useState, useEffect, useRef} from "react";
import {sliders} from "../../mocks/slider";
import {SLIDES_COUNT} from "../../const";
import Picture from "../picture/picture";

const  useInterval = (callback, delay)=> {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Banner = () => {

    const [slide, setSlide] = useState(0);

    useInterval(() => {
        if (slide < SLIDES_COUNT - 1) {
            setSlide(slide + 1);
        } else {setSlide(0)}
    }, 4000);

    return <section className="slider page-main__slider" style={{backgroundColor:`${sliders[slide].sliderBackgroundColor}`}}>
        <h2 className="visually-hidden">Слайдер</h2>
        <div className="container slider__container">
            <Picture webp={sliders[slide].imgSrc.webp} jpg={sliders[slide].imgSrc.jpg}/>
            <div className="slider__wrapper">
                <p className={`slider__title ${sliders[slide].isLightTheme && `slider__title--light`}`}>Лига Банк</p>
                <p className={`slider__description ${sliders[slide].isLightTheme && `slider__description--light`}`}>{sliders[slide].subTitle}</p>
                {Boolean(sliders[slide].buttonText.length) &&
                    <a className={`button slider__button ${sliders[slide].isLightTheme && `slider__button--light`}`} href="/">{sliders[slide].buttonText}</a>
                }
            </div>
        </div>
    </section>
};

export default Banner;
