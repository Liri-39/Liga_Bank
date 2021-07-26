import React from "react";
import Banner from "../banner/banner";

const Main = () => {
    return <main className="page__main page-main">
        <h1 className="visually-hidden">Лига Банк. Рассчитать кредит</h1>
        {<Banner/>}
        <div className="container">
        </div>
    </main>
};

export default Main;
