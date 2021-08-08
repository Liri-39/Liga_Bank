import React, {useState} from "react";
import {tabs} from "../../mocks/tabs";
import Bullets from "../bullets/bullets";
import Icons from "../icons/icons";
import TabContent from "../tab-content/tab-content";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(Number(0));
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
            if(activeTab < tabs.length-1) {
                setActiveTab(activeTab + 1)
            }
        }

        if (touchStart - touchEnd < -150) {
            if(activeTab > 0) {
                setActiveTab(activeTab - 1)
            }
        }
    }

    const handleTabClick = (evt) => {
        setActiveTab(Number(evt.currentTarget.id))
    }

    return <section className="container tabs"
                    id="services"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
    >
        <div className="tabs__titles">
            {tabs.map((item, index) =>
                <div className={`tabs__title ${Boolean(activeTab === index) ? `tabs__title--active` : ``}`}
                     key={`tab-${index}`}
                     id={index}
                     onClickCapture={handleTabClick}
                >
                    <Icons width="34" height="33" name={item.titleIcon}/>
                    <span>{item.title}</span>
                </div>
            )}
        </div>
        {<TabContent tabItem={tabs[activeTab]}/>}
        {<Bullets arr={tabs} activeIndex={activeTab} blockType={`tabs`} isLight={`true`}/>}

    </section>
}

export default Tabs;
