import React from "react";
import Banner from "../banner/banner";
import Tabs from "../tabs/tabs";

const Main = () => {
    return <main className="page__main page-main">
        <h1 className="visually-hidden">Лига Банк. Рассчитать кредит</h1>
        {<Banner/>}
        {<Tabs/>}
    </main>
};

export default Main;
