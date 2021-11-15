import React from "react";
import Footer from "../../../Shared/Footer/Footer";

import NavBar from "../../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Motorcycles from "../Motorcycles/Motorcycles";
import OverView from "../OverView/OverView";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <OverView></OverView>
            <Motorcycles></Motorcycles>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;
