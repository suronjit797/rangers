import React, { useEffect, useState } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import FirebaseErrorMessage from '../FirebaseErrorMessage';

import './OtherAuth.css'


import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const OtherAuth = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    // firebase hooks
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth, {sendEmailVerification: true});
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

    useEffect(() => {
        if (googleError) {
            setError(FirebaseErrorMessage(googleError.message))
        }
        if (fbError) {
            setError(FirebaseErrorMessage(fbError.message))
        }
    }, [googleError, fbError])

    if (googleLoading || fbLoading) {
        return (
            <div className='spinner_body' >
                <Spinner animation="grow" variant="warning" />
            </div>
        );
    }

    if(googleUser || fbUser){
        navigate('/')
    }

    const handelGoogle = () => {
        signInWithGoogle()
    }
    const handelFacebook = () => {
        signInWithFacebook()
    }




    return (
        <div className='otherAuth' >
            <div className="divider"> <span>or</span> </div>
            <p className="text-danger text-center"> {error} </p>
            <div className="mt-3">
                <button className="btn btn btn-outline-info" onClick={handelGoogle}>
                    <img src={google} alt="" />
                    Google
                </button>

                <button className="btn btn btn-facebook mt-3" onClick={handelFacebook}>
                    <img src={facebook} alt="" />
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default OtherAuth;