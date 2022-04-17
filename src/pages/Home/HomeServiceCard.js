import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ service }) => {
    return (
        <Col>
            <Card className='homeServiceCard'>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <div className="d-flex mb-3">
                        <Card.Title className='text-capitalize'> {service.name} </Card.Title>
                        <Card.Title className='text-capitalize ms-auto'> ${service.price} </Card.Title>
                    </div>
                    <Card.Text className='text-justify'>
                        {service.description.slice(0, 150)}
                        {service.description.length > 150 ? <span>...<Link to={`/services/${service.id}`}> See More</Link> </span> : ''}
                    </Card.Text> 
                </Card.Body>
                <Link to='/checkout' className='btn primary_btn bg-warning text-white'> <span>Proceed to checkout</span> </Link>
            </Card>
        </Col>
    );
};

export default HomeServiceCard;