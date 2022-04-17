import React, { useEffect, useState } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import FirebaseErrorMessage from '../FirebaseErrorMessage';

import './OtherAuth.css'


import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


const OtherAuth = () => {
    const navigate = useNavigate()

    // react tost
    const notify = err => toast(err);

    // firebase hooks
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

    useEffect(() => {
        if (googleError) {
            notify(FirebaseErrorMessage(googleError.message))
        }
        if (fbError) {
            notify(FirebaseErrorMessage(fbError.message))
        }
    }, [googleError, fbError])

    if (googleLoading || fbLoading) {
        return (
            <div className="d-block mx-auto">
                <Spinner animation="grow" variant="warning" />
            </div>
        );
    }

    if (googleUser || fbUser) {
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