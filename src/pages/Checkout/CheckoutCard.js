import React from 'react';

const CheckoutCard = ({product}) => {
    return (
        <div className="card my-3 checkoutCard">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body px-4">
                        <h4 className="card-title text-capitalize"> {product.name} </h4>
                        <p className='mb-1'> Price: <b>${product.price}</b> </p>
                        <p className="card-text mb-1"> Quantity: <b>{product.quantity}</b> </p>
                        <p className="card-text mb-1"> Total Price: <b>{product.totalPrice}</b> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCard;