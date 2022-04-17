import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {

    const [services, setServies] = useState([])

    useEffect(() => {
        fetch('json/service.json')
            .then(res => res.json())
            .then(item => setServies(item))
    }, [])


    return (
        <div className='mb-5'>
            <h1 className="text-center mb-5">
                <span className='adventure_title'> Our <b> Services </b> </span>
            </h1>
            <div className="row row-cols-md-3 align-items-stretch g-5">
                {
                    services.map((service, index) => index < 3 && <HomeServiceCard key={service.id} service={service} />)
                }
            </div>

            {
                services.length > 3 ? (
                    <p className="text-center">
                        <Link to='/services' className="btn btn-success mt-4 px-5"> See More... </Link>
                    </p>
                ) : ''
            }
        </div>
    );
};

export default HomeServices;