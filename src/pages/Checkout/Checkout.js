import React, { useEffect, useState } from 'react';
import CheckoutCard from './CheckoutCard';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import './checkOut.css'

const Checkout = () => {
    const [allProduct, setAllProduct] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('onCart')) || {})
    }, [])


    const notify = err => toast(err);


    useEffect(() => {
        fetch('/json/service.json')
            .then(res => res.json())
            .then(data => {
                let selectedCartItem = []
                Object.keys(cartItems).forEach(item => {
                    const a = data.find(food => food.id === item)
                    a.quantity = cartItems[item]
                    a.totalPrice = a.price * a.quantity
                    selectedCartItem = [...selectedCartItem, a]
                })
                setAllProduct(selectedCartItem);
            })
    }, [cartItems])

    useEffect(() => {
        let total = 0
        allProduct && allProduct.map(product => total = total + product.totalPrice)
        setTotalPrice(total)
    }, [allProduct])


    // handel proceed
    const handelProceed = event => {
        event.preventDefault()
        notify('your payment successful')
    }
    const handelClear = () => {
        localStorage.removeItem('onCart')
        setAllProduct([])
    }

    return (
        <div className='container'>
            <ToastContainer />
            <div className="row align-items-stretch">
                <div className="col-md-8">
                    {
                        allProduct.length ? (
                            allProduct.map(product => <CheckoutCard key={product.id} product={product} />)
                        ) : (
                            <div>
                                <p className="text-danger mt-4">
                                    No data found... <Link to='/services'> Please select service </Link>
                                </p>
                            </div>
                        )
                    }

                </div>

                <div className="col-md-4 my-3">
                    <div className="h-100 bg-white p-3">
                        <div className='d-flex justify-content-between fs-5'>
                            Your cost is <b>${totalPrice.toFixed(2)}</b>
                        </div>
                        <div className='d-flex justify-content-between fs-5'>
                            tex: <b>{(totalPrice * .05).toFixed(2)}</b>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between fs-5'>
                            Your total cost is <b>${(totalPrice + (totalPrice * .05)).toFixed(2)}</b>
                        </div>

                        <button
                            className='primary_btn bg-danger text-white d-block mx-auto mt-4 btn'
                            onClick={handelClear}
                        >
                            <span> Clear Cart</span>
                        </button>


                        <h1 className="text-center mt-5 mb-4"> Payment method </h1>

                        <form className="checkOutInput" onSubmit={handelProceed}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder='Your name'
                                required
                            />
                            <input
                                type="number"
                                name="cardNumber"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={e => setCardNumber(e.target.value)}
                                placeholder='Your card number'
                                required
                            />

                            <button className='primary_btn bg-warning text-white d-block mx-auto mt-4 btn' type='submit'> <span> Proceed to checkOut </span> </button>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;