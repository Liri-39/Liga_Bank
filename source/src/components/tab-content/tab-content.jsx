import React from "react";
import PropTypes from "prop-types";

const TabContent = (props) => {
    const tabImage = {
        backgroundImage: 'url(' +  props.tabItem.img.jpg[0] + ')',
    };

    return <>
        <div className="tabs__content">
            <h3 className="tabs__slogan">{props.tabItem.slogan}</h3>
            <ul className="tabs__list">
                {props.tabItem.advantageList.map((item, index) =>
                    <li className={`tabs__list-item`}
                        key={`${index}-advantage`}
                    >
                        <span>{item}</span>
                    </li>
                )}
            </ul>
            {Boolean(props.tabItem.button.length) &&
            <button className="button tabs__button">{props.tabItem.button}</button>
            }
            {Boolean(props.tabItem.description.length) &&
                <p className="tabs__description">{props.tabItem.description}
                <a className="tabs__description--link" href={props.tabItem.descriptionLink}>{props.tabItem.descriptionLinkText}</a>
                </p>
            }
        </div>
        <div className="tabs__img"
             style={tabImage}/>
    </>
}

TabContent.propTypes = {
    tabItem: PropTypes.shape({
        img: PropTypes.shape({
            webp: PropTypes.array.isRequired,
            jpg: PropTypes.array.isRequired,
        }).isRequired,
        advantageList: PropTypes.array.isRequired,
        slogan: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionLink: PropTypes.string.isRequired,
        descriptionLinkText: PropTypes.string.isRequired,
    }).isRequired,
};

export default TabContent;
