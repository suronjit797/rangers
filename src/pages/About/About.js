import React from 'react';

import user from '../../images/sk.JPG'
import './About.css'

const About = () => {
    return (
        <div className='about container'>

            <div className="row g-0 align-items-center my-4">
                <div className="col md-6">
                    <img src={user} className='about_profile' alt="" />
                </div>
                <div className="col md-6">
                    <div className="about_body">
                        <h1> Suronjit Pal </h1>
                        <h4 className='my-4'> A web developer and designer </h4>
                        <p>
                            I work in this section from 2019 to present. I am expert in HTML5, CSS3, JavaScript, Bootstrap, Tailwind, React, Redux, Firebase, Firebase Hooks, Axious,
                        </p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;