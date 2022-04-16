import React from 'react';
import Adventure from './Adventure';
import Banner from './Banner';

import './Home.css'
import HomeServices from './HomeServices';

const Home = () => {
    document.title = 'Rengers || Home'
    return (
        <>
            <div className='banner'>
                <Banner />
            </div>
            <div className="container">
                <Adventure />
                <HomeServices />
            </div>
        </>
    );
};

export default Home;