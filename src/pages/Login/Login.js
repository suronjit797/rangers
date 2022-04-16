import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



const Login = () => {
    // state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // other hooks
    const navigate = useNavigate();
    const location = useLocation();

    // previous path
    const from = location.state?.from?.pathname || "/";


    let hadleLoginSubmit = event => {
        event.preventDefault()

        // make login submit handler 

        navigate(from, { replace: true });
    }


    return (
        <div className='login' >
            login
        </div>
    );
};

export default Login;