import React from "react";
import Banner from "../Banner/Banner";
import Motorcycles from "../Motorcycles/Motorcycles";
import OverView from "../OverView/OverView";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Motorcycles></Motorcycles>
        </div>
    );
};

export default Home;
