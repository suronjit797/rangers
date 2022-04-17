import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseErrorMessage from '../../components/FirebaseErrorMessage';
import OtherAuth from '../../components/OtherAuth/OtherAuth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import userImg from '../../images/user.png'
import { Spinner } from 'react-bootstrap';


const Regiester = () => {
    const navigate = useNavigate()
    // state
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agree, setAgree] = useState(false)

    // fire base hooks
    const [
        createUserWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    // react tost
    const notify = err => toast(err);

    // regiester
    const hadleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            notify('Password does not match')
            return
        }
        console.log(email, password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });

    }

    useEffect(() => {
        if (loginError) {
            notify(FirebaseErrorMessage(loginError.message))
            console.log(loginError)
        }

    }, [loginError])

    if (updating || loginLoading) {
        return (
            <div className='spinner_body' >
                <Spinner animation="grow" variant="warning" />
            </div>
        );
    }

    if (loginUser) {
        navigate('/')
    }


    return (
        <div className='my-5' >
            <div className="container">
                <ToastContainer />
                <div className="row authFrom g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={userImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h1 className='text-center mb-4'> Create new user </h1>
                        <form onSubmit={hadleSubmit}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name'
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
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
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                id="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    checked={agree}
                                    onClick={() => setAgree(!agree)}
                                />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button
                                className='btn primary_btn bg-success text-white'
                                type="submit"
                                disabled={!agree}
                            >
                                <span>Sign Up</span>
                            </button>
                        </form>
                        <p className="mt-3 text-center">
                            Already have an account?
                            <Link to='/login'> Login now  </Link>
                        </p>

                        <OtherAuth />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Regiester;