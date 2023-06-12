import React from 'react';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div className="mb-20">

        <Helmet>
        <title>Sports Academic | Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;