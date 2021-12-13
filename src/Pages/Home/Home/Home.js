import React from "react";
import Footer from "../../../Shared/Footer/Footer";

import NavigationBar from "../../../Shared/NavigationBar/NavigationBar";
import Banner from "../Banner/Banner";
import Motorcycles from "../Motorcycles/Motorcycles";
import OverView from "../OverView/OverView";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <OverView></OverView>
            <Motorcycles></Motorcycles>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;
