import React from 'react';
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";

const Wishlist = () => {
    return (
        <>
        <Meta title={"wishlist"}/>
        <BreadCrumb title="wishlist"/>
        <div className='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'> 
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-img'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>
                                    Organic Fruits Apple
                                </h5>
                                <h6 className='price'>Rs.200</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'> 
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-img'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>
                                    Organic Fruits Apple
                                </h5>
                                <h6 className='price'>Rs.200</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'> 
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-img'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>
                                    Organic Fruits Apple
                                </h5>
                                <h6 className='price'>Rs.200</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'> 
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-img'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                            <div className='py-3'>
                                <h5 className='title'>
                                    Organic Fruits Apple
                                </h5>
                                <h6 className='price'>Rs.200</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
    };
export default Wishlist