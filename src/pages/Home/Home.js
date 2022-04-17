import React from 'react';
import Adventure from './Adventure';
import Banner from './Banner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


import './Home.css'
import HomeServices from './HomeServices';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);

    document.title = 'Rengers || Home'

    if(loading){
        return <p> loading... </p>
    }
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