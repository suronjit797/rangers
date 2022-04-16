import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    const [err, setErr] = useState('')  // do somthin with err


    const [user, loading, error] = useAuthState('auth');  // modify to require auth
    let location = useLocation();


    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>  { /* make a spinner */ }
            </div>
        );
    }
    if(error){
        setErr(error.message)
    }
    if (!user) {
        return  <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;