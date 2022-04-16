import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ service }) => {
    return (
        <Col>
            <Card className='homeServiceCard'>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title className='text-capitalize'> {service.name} </Card.Title>
                    <Card.Text> {service.description} </Card.Text>
                </Card.Body>
                <Link to='/checkout' className='btn primary_btn bg-warning text-white'> <span>Proceed to checkout</span> </Link>
            </Card>
        </Col>
    );
};

export default HomeServiceCard;