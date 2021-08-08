import React, {useState, useEffect, useRef} from "react";
import {sliders} from "../../mocks/slider";
import {SLIDES_COUNT, SLIDE_DELAY} from "../../const";
import Picture from "../picture/picture";
import Bullets from "../bullets/bullets";

const  useInterval = (callback, delay)=> {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (evt) => {
        setTouchStart(evt.targetTouches[0].clientX);
    }

    const handleTouchMove = (evt) => {
        setTouchEnd(evt.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            setNextSlide();
        }

        if (touchStart - touchEnd < -150) {
            setPrevSlide();
        }
    }

    const setNextSlide = () => {
        if (slide < SLIDES_COUNT - 1) {
            setSlide(slide + 1);
        } else {setSlide(0)}
    }

    const setPrevSlide = () => {
        if (slide === 0) {
            setSlide(SLIDES_COUNT - 1);
        } else {setSlide( slide - 1)}
    }

    useInterval(() => {
        setNextSlide()
    }, SLIDE_DELAY);

    return <section className="slider page-main__slider" style={{backgroundColor:`${sliders[slide].sliderBackgroundColor}`}}>
        <h2 className="visually-hidden">Слайдер</h2>
        <div className="container slider__container"
             onTouchStart={handleTouchStart}
             onTouchEnd={handleTouchEnd}
             onTouchMove={handleTouchMove}
        >
            <Picture webp={sliders[slide].imgSrc.webp} jpg={sliders[slide].imgSrc.jpg}/>
            <div className="slider__wrapper">
                <p className={`slider__title ${sliders[slide].isLightTheme && `slider__title--light`}`}>Лига Банк</p>
                <p className={`slider__description ${sliders[slide].isLightTheme && `slider__description--light`}`}>{sliders[slide].subTitle}</p>
                {Boolean(sliders[slide].buttonText.length) &&
                    <a className={`button slider__button ${sliders[slide].isLightTheme && `slider__button--light`}`} href={sliders[slide].buttonLink}>{sliders[slide].buttonText}</a>
                }
            </div>
            {<Bullets arr={sliders} activeIndex={slide} blockType={`slider`} isLight={sliders[slide].isLightTheme}/>}
        </div>
    </section>
};

export default Banner;
