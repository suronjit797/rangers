import React from 'react';
import { Link } from 'react-router-dom';

import adventure from '../../images/adventure.jpg'


const Adventure = () => {

    return (
        <div className='adventure my-5'>
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <img src={adventure} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                        <p className='fs-1 mb-5'>
                            <span className='adventure_title'> About <b>Adventure</b> </span>
                        </p>
                        <h3> This is your planet. Introduce yourself </h3>
                        <p>
                            Travelling with Renger is the best way to get closer with your own planet. For more than 20 years, we provide our service to our customer and they satisfied with us.
                        </p>

                        <Link to='/bloghom' className='btn bg-warning text-white primary_btn'> <span> Why Travel with Ranger? </span> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventure;