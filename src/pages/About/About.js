import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

import user from '../../images/sk.JPG'
import './About.css'

const About = () => {

    const [skill] = useState({
        html: 100,
        css: 90,
        js: 70,
        react: 70,
        bootstrap: 100,
        firebase: 40
    })


    return (
        <div className='about container'>

            <div className="row g-0 align-items-center my-4 align-items-stretch">
                <div className="col md-6">
                    <img src={user} className='about_profile h-100' alt="" />
                </div>
                <div className="col md-6">
                    <div className="about_body  h-100">
                        <div>
                            <h1> Suronjit Pal </h1>
                            <h4 className='my-4'> A web developer and designer </h4>
                            <p>
                                I work in this section from 2019 to present. I am expert in HTML5, CSS3, JavaScript, Bootstrap, Tailwind, React, Redux, Firebase, Firebase Hooks, Axious,
                            </p>
                            <div className="skill">

                                <span>HTML</span>
                                <p><ProgressBar now={skill.html} /> </p>
                                <span>CSS</span>
                                <p><ProgressBar now={skill.css} /> </p>
                                <span>JS</span>
                                <p><ProgressBar now={skill.js} /> </p>
                                <span>REACT</span>
                                <p><ProgressBar now={skill.react} /> </p>
                                <span>BOOTSTARP</span>
                                <p><ProgressBar now={skill.bootstrap} /> </p>
                                <span>FIREBASE</span>
                                <p><ProgressBar now={skill.firebase} /> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;