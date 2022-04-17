import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import traveller from '../../images/traveller.jpg'
import HomeServiceCard from '../Home/HomeServiceCard';

const ServiceBanner = () => {


    const [services, setServies] = useState([])

    useEffect(() => {
        fetch('json/service.json')
            .then(res => res.json())
            .then(item => setServies(item))
    }, [])



    return (
        <div>
            <div className='adventure my-5'>
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <div className="text-center">
                            <p className='fs-1 mb-5'>
                                <span className='adventure_title'> Our <b> Services </b> </span>
                            </p>
                            <h3> Anywhere with Us </h3>
                            <p>
                                Travelling with Renger is the best way to get closer with your own planet. For more than 20 years, we provide our service to our customer and they satisfied with us.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={traveller} alt="" />
                    </div>
                </div>
            </div>
            <hr className='mb-5' />
            <div className="row row-cols-md-3 align-items-stretch g-5 mb-5">
                {
                    services.map((service, index) =>  <HomeServiceCard key={service.id} service={service} />)
                }
            </div>

        </div>
    );
};

export default ServiceBanner;