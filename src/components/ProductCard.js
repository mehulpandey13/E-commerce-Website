import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
        <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link to=':id' className="product-card position-relative ">
                <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wish"/>
                </Link>
                </div>
                <div className="product-img">
                    <img src="images/organic.jpg" className="img-fluid" alt=""/>
                    <img src="images/organic1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="product-detail">
                    <h6 className="brand">Organic India</h6>
                    <h5 className="product-title">
                        sdafsfhfahvfafhkv
                        akhfsdafsssssaaaaaa
                    </h5>
                    <ReactStars
                       count={5}
                       size={24}
                       value={3}
                       edit={false}
                       activeColor="#ffd700"
                    />
                    <p className={`description ${grid == 12 ? "d-block" : "d-none"}`} >
                    ORGANIC INDIA’s Quinoa (pronounced “keen-wah”) is certified organic 
                    Quinoa seeds/grain sourced from organic farmers. Naturally rich in fibre,
                     Quinoa also contains all 9 essential amino acids, making it a great 
                     protein source for vegetarians and vegans. Use it as a breakfast cereal or 
                     substitute rice with quinoa in khichadi, pulao and stir-fries.
                    </p>
                    <p className="price"> Rs. 750 </p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                          <img src="images/add-cart.svg" alt="addcart"/>
                        </Link>
                        <Link>
                          <img src="images/view.svg" alt="view"/>
                        </Link>
                        <Link>
                          <img src="images/prodcompare.svg" alt="compare"/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
};

export default ProductCard;