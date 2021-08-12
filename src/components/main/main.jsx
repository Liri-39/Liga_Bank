import React from "react";
import Banner from "../banner/banner";
import Tabs from "../tabs/tabs";
import Calculator from "../calculator/calculator";
import Offices from "../offices/offices";

const Main = () => {
    return <main className="page__main page-main">
        <h1 className="visually-hidden">Лига Банк. Рассчитать кредит</h1>
        {<Banner/>}
        {<Tabs/>}
        {<Calculator/>}
        {<Offices/>}
    </main>
};

export default Main;
