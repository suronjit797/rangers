import React from 'react';

import user from '../../images/sk.JPG'
import './About.css'

const About = () => {
    return (
        <div className='about container'>
            <div className="about_body">
                <p className="text-center">
                    <img src={user} className='about_profile' alt="" />
                </p>
                <h2> Hello, I am suronjit pal </h2>
                <h4 className='my-4'> A web developer and designer </h4>
                <p>
                    I work in this section from 2019 to present. I am expert in HTML5, CSS3, JavaScript, Bootstrap, Tailwind, React, Redux, Firebase, Firebase Hooks, Axious, 
                </p>
            </div>
        </div>
    );
};

export default About;