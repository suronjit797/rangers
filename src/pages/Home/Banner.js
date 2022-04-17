import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Banner = () => {
    const [user, loading, error] = useAuthState(auth);


    return (
        <div className="text-white text-center">
            <h1 className='mb-4 banner_title'> Welcome,
                <span className="text-warning"> {user && user.displayName ? user.displayName : 'Dear'} </span>
            </h1>
            <h3> Life is a journey. Make the best of it with <b className="text-warning"><i>Ranger</i></b> </h3>
        </div>
    );
};

export default Banner;