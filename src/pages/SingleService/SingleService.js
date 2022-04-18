import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import './SinglePost.css'

const SingleService = () => {

    const { serviceId } = useParams()

    const [allPost, setAllPost] = useState([])
    const [singlePost, setSinglePost] = useState(allPost)

    useEffect(() => {
        fetch('/json/service.json')
            .then(res => res.json())
            .then(data => setAllPost(data))
    }, [])


    useEffect(() => {
        const single = allPost.find(post => post.id === serviceId)
        setSinglePost(single)
    }, [allPost, serviceId])



    return (
        <div className="container">
            <div className='singlePost'>
                <Card>
                    <Card.Img variant="top" src={singlePost?.image} />
                    <Card.Body>
                        <Card.Title className='text-capitalize fw-bold'> {singlePost?.name} </Card.Title>
                        <div className="d-flex justify-content-between my-3">
                        <Card.Title className='text-capitalize fw-bold'>
                            Pirce: <span className="text-primary">${singlePost?.price} </span>
                        </Card.Title>
                        <Card.Title className='text-capitalize fw-bold'> {singlePost?.duratoin} trips </Card.Title>
                        </div>
                        <Card.Text className='text-justify'> {singlePost?.description} </Card.Text>
                        <h3>Services:</h3>
                        <ul className='ms-4 service_list' >
                            {
                                singlePost?.otehrs?.map(item=><li className='text-capitalize' > {item} </li>)
                            }
                        </ul>
                    </Card.Body>
                    <Link to='/checkout' className='btn primary_btn bg-warning text-white'> <span>Proceed to checkout</span> </Link>
                </Card>
            </div>
        </div>
    );
};

export default SingleService;