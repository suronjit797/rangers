import React, { useEffect, useState } from 'react';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {

    const [services, setServies] = useState([])

    useEffect(() => {
        fetch('json/service.json')
            .then(res => res.json())
            .then(item => setServies(item))
    }, [])


    return (
        <div>
            <h1 className="text-center mb-5">
                <span className='adventure_title'> Our <b> Services </b> </span>
            </h1>
            <div className="row row-cols-md-3 align-items-stretch g-5">
                {
                    services.map((service, index) => index < 3 && <HomeServiceCard key={service.id} service={service} />)
                }
            </div>

        </div>
    );
};

export default HomeServices;