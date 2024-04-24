import React from 'react'
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name"/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>

                </div>
                <div className='col-6'>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p>
                    De-stress the natural way with ORGANIC INDIA’s Ashwagandha Capsules, a powerful adaptogen and anti-stress agent that can help relieve mental, physical & emotional stress. Leverage the power of the Ashwagandha root to boost your vitality, stamina and fight chronic stress and fatigue.
                    <br/>
Directions for use:<br/>

2 capsules twice daily, with meals or after meals, or as directed by your healthcare provider.
<br/>

Health & Benefits :<br/>
● Helps relieve stress, anxiety, and depression<br/>
● Promotes restful sleep & helps ease insomnia<br/>
● Builds energy levels and relieves exhaustion<br/>
● Enhances healthy immune function<br/>
● Fights premature ageing
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='review-head d-flex align-items-end justify-content-between'>
                        <div>
                            <h4>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                       count={5}
                       size={24}
                       value={4.7}
                       edit={false}
                       activeColor="#ffd700"
                    />
                    <p className='mt-2'>Based on 2 reviews</p>
                    </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    </>
  );
};

export default SingleProduct