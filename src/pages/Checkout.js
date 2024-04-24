import React from 'react'
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import famas from '../famas.jpg'
const Checkout = () => {
  return (
    <>
    <div className='checkout-wrapper'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name mt-2'>Organo.</h3>
                        <hr/>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/cart'/>Cart</li> &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Information</li> &nbsp; /
    <li className="breadcrumb-item"><Link to='/cart'/>Shipping</li> &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>       
</nav>
                        <hr/>
                         <h4 className='title total'>
                            Contact Information
                         </h4>
                         <p className='user-details total'>
                            Mehul Pandey (mehul@gmail.com)
                         </p>
                         <h4 className='mb-3'>
                            Shipping details
                         </h4>
                         <form action='' className='d-flex gap-15 justify0content-between flex-wrap'>
                            <div className='w-100'>
                            <select name='' className='form-control form-select w-100' id=''>
                            <option value='' selected disabled>Select Country</option>
                            </select>
                            </div>
                            <div className='w-100'>
                                <input type='text' placeholder='First Name' className='form-control'/>

                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='First Name' className='form-control'/>

                            </div>
                            <div className='flex-grow-1'>
                                <input type='text'  placeholder='Last Name' className='form-control'/>

                            </div>
                            <div className='w-100'>
                                <input type='text' placeholder='Address' className='form-control'/>

                            </div>
                            <div className='w-100'>
                                <input type='text' placeholder='Apartment, suite etc.'  className='form-control'/>

                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='city' className='form-control'/>

                            </div>
                            <div className='flex-grow-1'>
                            <select name='' className='form-control form-select w-100' id=''>
                                <option value='' selected disabled>Select State</option>
                            </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='ZipCode' className='form-control'/>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to='/cart' className='text-dark mb-5 mt-2'>
                                        < BiArrowBack className='me-2 '/>Return to cart</Link>
                                    <Link to='/cart' className='button mb-5 mt-2'>Continue shopping</Link>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span className='badge bg-secondary text-white position-absolute'>1</span>
                                    <img className='img-fluid' src={famas} alt='product'/>
                                </div>
                                <div>
                                    <h5 className='total-price'>Ashwagandha</h5>
                                    <p className='total-price'>Organic tablets that reduces stress and built immunity</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>Rs.300</h5>
                            </div>
                        </div>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span className='badge bg-secondary text-white position-absolute'>1</span>
                                    <img className='img-fluid' src={famas} alt='product'/>
                                </div>
                                <div>
                                    <h5 className='total-price'>Ashwagandha</h5>
                                    <p className='total-price'>Organic tablets that reduces stress and built immunity</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>Rs.300</h5>
                            </div>
                        </div>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span className='badge bg-secondary text-white position-absolute'>1</span>
                                    <img className='img-fluid' src={famas} alt='product'/>
                                </div>
                                <div>
                                    <h5 className='total-price'>Ashwagandha</h5>
                                    <p className='total-price'>Organic tablets that reduces stress and built immunity</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>Rs.300</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>RS. 10000</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>RS. 10000</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>RS. 10000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Checkout