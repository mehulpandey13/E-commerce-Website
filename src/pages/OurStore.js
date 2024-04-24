import React, { useState } from "react";
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
    return (
        <>
        <Meta title={"Our Store"}/>
        <BreadCrumb title="Our Store"/>
        <div className="store-wrapper home-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop by categories
                            </h3>
                            <div>
                                 <ul>
                                    <li>Cereals</li>
                                    <li>Pulses</li>
                                    <li>Spices</li>
                                    <li>Fruits</li>
                                    <li>Vegetables</li>
                                    <li>Agro Products</li>
                                 </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                        <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">
                                    Availability
                                </h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                    <label className="form-check-label" htmlFor="">
                                    In Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="" />
                                    <label className="form-check-label" htmlFor="">
                                        Out of Stock (0)
                                    </label>
                                </div>
                                <h5 className="sub-title">
                                    Price 
                                </h5>
                                <div className="d-flex align-items-center gap-10">
                                <div className="form-floating mb-3">
  <input type="email" className="form-control"  id="floatingInput" placeholder="From" />
  <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
  <label htmlFor="floatingInput">To</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                        <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Rice
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Dal
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Spices
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Green Tea
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Fruits
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Vegetables
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Coco pit
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Manure & Fertilizers
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Supliments
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Natural Herbs
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Ghee
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                        <h3 className="filter-title">
                                Random Product
                            </h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="images/dal.jpg" className="img-fluid" alt="dal" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Organic Gluten Free, Unpolished and High Protein Sprouts Pulses</h5>
                                        <ReactStars
                       count={5}
                       size={24}
                       value={4}
                       edit={false}
                       activeColor="#ffd700"
                    />
                    <b>Rs.566</b>
                                    </div>
                                </div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="images/dal.jpg" className="img-fluid" alt="dal" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Organic Gluten Free, Unpolished and High Protein Sprouts Pulses</h5>
                                        <ReactStars
                       count={5}
                       size={24}
                       value={4}
                       edit={false}
                       activeColor="#ffd700"
                    />
                    <b>Rs.566</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-ceter gap-10">
                                <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:</p>
                                <select name="Sort_By" className="form-control form-select" id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling"> Best Selling</option>
                                    <option value="title-ascending">Alphabetically, A-Z</option>
                                    <option value="title-descending">Alphabetically, Z-A</option>
                                    <option value="price-ascending">Price, Low to High</option>
                                    <option value="price-descending">Price, High to Low</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0">21 products</p>
                                <div className="d-flex gap-10 align-items-center grid">
                                    <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className="d-block img-fluid" alt="1"/>
                                    <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className="d-block img-fluid" alt="2"/>
                                    <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className="d-block img-fluid" alt="3"/>
                                    <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className="d-block img-fluid" alt="4"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="product-list pb-5">
                            <div className="d-flex gap-10 flex-wrap ">
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default OurStore;