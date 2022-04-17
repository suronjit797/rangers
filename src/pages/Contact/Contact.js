import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import './Contact.css'


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handelMessage = e => {
        e.preventDefault()
        console.log({name, email, message})
    }


    return (
        <div className='container contact'>
            <form onSubmit={handelMessage}>
                <Form.Control
                    type="text"
                    id="name"
                    placeholder='Name'
                    className='mt-3'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <Form.Control
                    type="email"
                    id="email"
                    placeholder='Email'
                    className='mt-3'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <textarea
                    name="message"
                    id="message"
                    placeholder='Message'
                    className='form-control mt-3'
                    rows="4"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
                <button className="btn btn-success mt-3 d-block w-100"> Send </button>
            </form>
        </div>
    );
};

export default Contact;