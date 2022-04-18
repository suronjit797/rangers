import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ service }) => {

    const handelAddToCart = id => {

        let cartItems = JSON.parse(localStorage.getItem('onCart')) || {}
        if (cartItems[id]) {
            cartItems[id] = cartItems[id] + 1
        } else {
            cartItems[id] = 1
        }
        localStorage.setItem('onCart', JSON.stringify(cartItems))
    }



    return (
        <Col>
            <Card className='homeServiceCard'>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                    <div className="d-flex mb-3">
                        <Card.Title className='text-capitalize'> {service.name} </Card.Title>
                        <Card.Title className='text-capitalize ms-auto text-primary'> ${service.price} </Card.Title>
                    </div>
                    <Card.Text className='text-justify'>
                        {service.description.slice(0, 150)}
                        {service.description.length > 150 ? <span>...<Link to={`/services/${service.id}`}> See More</Link> </span> : ''}
                    </Card.Text>
                </Card.Body>
                <div className="d-flex">
                    <Link to='/checkout' className='btn primary_btn bg-warning text-white me-1'> <span>Checkout</span> </Link>
                    <button
                        onClick={() => handelAddToCart(service.id)}
                        className='btn primary_btn bg-success text-white ms-1'
                    >
                        <span>Add to Cart</span>
                    </button>
                </div>
            </Card>
        </Col>
    );
};

export default HomeServiceCard;