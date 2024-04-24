import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/blogcard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
    return (
        <>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative p-3">
                            <img src="images/bu2.jpg" className="img-fluid rounded-3 " alt=""/>
                            <div className="main-banner-content position-absolute">
                                <h4>Healthy & Trendy</h4>
                                <h5>Organic Foods.</h5>
                                <p>India's Certified Organic Store</p>
                                <Link to='/Store' className="button">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                        <div className="small-banner position-relative">
                            <img src="images/ba.jpg" className="img-fluid rounded-3" alt=""/>
                            <div className="small-banner-content position-absolute">
                                <h4>Healthy & Trendy</h4>
                                <h5>Organic Foods.</h5>
                                <p>India's Certified Organic Store</p>
                            </div>
                        </div>
                        <div className="small-banner position-relative">
                            <img src="images/ba.jpg" className="img-fluid rounded-3" alt=""/>
                            <div className="small-banner-content position-absolute">
                                <h4>Healthy & Trendy</h4>
                                <h5>Organic Foods.</h5>
                                <p>India's Certified Organic Store</p>
                            </div>
                        </div>
                        <div className="small-banner position-relative">
                            <img src="images/ba.jpg" className="img-fluid rounded-3" alt=""/>
                            <div className="small-banner-content position-absolute">
                                <h4>Healthy & Trendy</h4>
                                <h5>Organic Foods.</h5>
                                <p>India's Certified Organic Store</p>
                            </div>
                        </div>
                        <div className="small-banner position-relative">
                            <img src="images/ba.jpg" className="img-fluid rounded-3" alt=""/>
                            <div className="small-banner-content position-absolute">
                                <h4>Healthy & Trendy</h4>
                                <h5>Organic Foods.</h5>
                                <p>India's Certified Organic Store</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service.png" alt="services"/>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className="mb-0">From all orders above Rs. 1000/-</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="services"/>
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className="mb-0">Save up to 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="services"/>
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="services"/>
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className="mb-0">Get Factory direct price</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-05.png" alt="services"/>
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Groceries</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries"  />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Vegetables</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Fruits</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Agro Products</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Groceries</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries"  />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Vegetables</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Fruits</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                            <div className="img d-flex align-items-center"> 
                                <div>
                                    <h6>Agro Products</h6>
                                    <p>All Items</p>
                                </div>
                                <img src="images/1111.jpg" className="image" alt="groceries" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="featured-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
        <section className="famous-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Famous Product
                        </h3>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famas-2.jpg" className="img-fluid" alt="1"/>
                            <div className="famous-content position-absolute">
                            <h5>Preservative Free</h5>
                            <h6>Organic Groceries Cart</h6>
                            <p>starting from Rs.99 only</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famas-4.jpg" className="img-fluid" alt="1"/>
                            <div className="famous-content position-absolute">
                            <h5>Preservative Free</h5>
                            <h6>Organic Groceries Cart</h6>
                            <p>starting from Rs.99 only</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famas-3.jpg" className="img-fluid" alt="1"/>
                            <div className="famous-content position-absolute">
                            <h5>Preservative Free</h5>
                            <h6>Organic Groceries Cart</h6>
                            <p>starting from Rs.99 only</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famas.jpg" className="img-fluid" alt="1"/>
                            <div className="famous-content position-absolute">
                            <h5>Preservative Free</h5>
                            <h6>Organic Groceries Cart</h6>
                            <p>starting from Rs.99 only</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section className="special-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div style={{ width: '140%' }} className="row gap-5 d-flex flex-grow-1 gap-15">
                <SpecialProduct/>    
                <SpecialProduct/>
                <SpecialProduct/>
                <SpecialProduct/>
                </div>
            </div>
        </section>
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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </section>
        <section className="marque-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="images/brand-1.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-2.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-3.jpeg" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-4.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-5.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-6.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-7.jpeg" alt="brand"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Latest Blogs
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-3 d-flex flex-grow-1 gap-30 align-items-center">
                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Home;