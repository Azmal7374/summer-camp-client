import React from 'react';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses/PopularClasses';
import TopInstructors from './TopInstructors/TopInstructors';
import TopSportsAnalysis from './TopSportsAnalysis/TopSportsAnalysis';

const Home = () => {
    return (
        <div className="mb-20 p-10">

        <Helmet>
        <title>Sports Academic | Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <TopInstructors></TopInstructors>
            <TopSportsAnalysis></TopSportsAnalysis>
        </div>
    );
};

export default Home;