import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/notfound.jpg'

import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={notFoundImage} className='h-100 w-100' alt="" />

            <Link to='/' className='primary_btn bg-warning text-white' > <span>Back to Home</span> </Link>
        </div>
    );
};

export default NotFound;