import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
    return (
        <div className="col-4">
            <div className="special-product-card">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img src="images/fruits.png" className="img-fluid" alt="fruit"/>
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Sampurn Organic</h5>
                        <h6 className="title">
                        Blazing Bestsellers
                        Vegan | Preservative Free | Easy to Cook
                        </h6>
                        <ReactStars
                       count={5}
                       size={24}
                       value={4}
                       edit={false}
                       activeColor="#ffd700"
                       />
                    <p className="price">
                        <span className="red-p">Rs.670</span> &nbsp; <strike>Rs. 590</strike>
                    </p>
                    <div className="discount-til d-flex align-items-center">
                        <p className="mb-0"><b>5 </b>days</p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-3 bg-warning">1</span>:
                            <span className="badge rounded-circle p-3 bg-warning">1</span>:
                            <span className="badge rounded-circle p-3 bg-warning">1</span>
                        </div>
                    </div>
                    <div className="product-count mt-3">
                            <p>Products: 5</p>
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                    </div>
                    <div>
                        <Link className="button mt-3">Add To Cart</Link>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpecialProduct;