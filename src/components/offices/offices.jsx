import React from "react";
import MapY from "../map/map";

const Offices = () => {
    return <section className="container offices">
        <h2 className="offices__title">Отделения Лига Банка</h2>
        {<MapY/>}
    </section>
}

export default Offices;
