import React from "react";

const Bullets = (props) => {
    return <div className={`bullets-block ${props.blockType}__bullets-block`}>
        { props.arr.map((item, index) =>
            <span className={`bullet ${Boolean(Number(props.activeIndex) === Number(index))? `bullet--active${props.isLight? `-light` : ``}` : ``}`}
                  key={` ${props.blockType}-${index}`}
            />
        )}

    </div>
}

export default Bullets;
