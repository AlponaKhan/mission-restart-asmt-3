import React from 'react';
import Banner from './Banner';
import CardBanner from './CardBanner';
import TrendingApp from './TrendingApp';

const Home = ({dataPromise}) => {
    return (
        <div>
            <Banner></Banner>
            <CardBanner></CardBanner>
            <TrendingApp dataPromise={dataPromise}></TrendingApp>
            {/* <h2>this is home page</h2> */}
        </div>
    );
};

export default Home;