import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import FirebaseErrorMessage from '../../components/FirebaseErrorMessage';
import OtherAuth from '../../components/OtherAuth/OtherAuth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import user from '../../images/user.png'
import './Auth.css'

const Login = () => {
    // state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // other hooks
    const navigate = useNavigate();
    const location = useLocation();

    // react tost
    const notify = err => toast(err);


    // firebase hoooks
    const [
        signInWithEmailAndPassword,
        signUser,
        signLoading,
        signError,
    ] = useSignInWithEmailAndPassword(auth);

    // previous path
    const from = location.state?.from?.pathname || "/";


    let hadleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (signError) {
            notify(FirebaseErrorMessage(signError.message))
            console.log(signError)
        }

    }, [signError])

    if (signLoading) {
        return (
            <div className='spinner_body' >
                <Spinner animation="grow" variant="warning" />
            </div>
        );
    }

    if (signUser) {
        navigate(from, { replace: true });
    }


    return (
        <div className='my-5' >
            <div className="container">
                <ToastContainer />
                <div className="row authFrom g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={user} alt="" />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h1 className='text-center mb-4'> User login </h1>
                        <form onSubmit={hadleSubmit}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder='password'
                                id="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button className='btn primary_btn bg-success text-white' type="submit"> <span>Log in</span> </button>
                        </form>
                        <p className="mt-3 text-center">
                            Not have an account?
                            <Link to='/register'> Create now  </Link>
                        </p>
                        <OtherAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;