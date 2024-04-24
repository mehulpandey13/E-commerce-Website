import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () => {
    return ( <>
    <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <p className="text-white mb-0">Free shipping over Rs. 1000 & Free Returns</p>
                </div>
                <div className="col-6">
                    <p className="text-end text-white mb-0">
                        HotLine:<a className="text-white mb-0" href="*918085468967">(*91) 80854 68967</a>
                    </p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-2">
                   <h2>
                    <Link className="text-white">Organo.</Link>
                   </h2>
                </div>
                <div className="col-5">
                <div className="input-group">
                    <input type="text" className="form-control py-2" placeholder="Search Product Here...." aria-label="Search Product Here...." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">
    <BsSearch className="fs-5" />
      </span>
      </div>
    </div>
    <div className="col-5">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                            <Link to='/Wishlist' className="d-flex align-items-center gap-10 text-white">
                              <img src="/images/wishlist.svg" alt="2"/>
                              <p className="mb-0">Favourite <br/> Wishlist</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/Login' className="d-flex align-items-center gap-10 text-white">
                              <img src="/images/user.svg" alt="3"/>
                              <p className="mb-0">My Account</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/Checkout' className="d-flex align-items-center gap-10 text-white">
                              <img src="/images/cart.svg" alt="4"/>
                              <div className="d-flex flex-column">
                                <span className="badge bg-white text-dark">0</span>
                                <p className="mb-0">Rs.500</p>
                              </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="/images/menu.svg" alt="menu" /><span className="me-5 d-inline-block">Shop Categpries</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
  </ul>
                          </div>
                        </div> 
                       <div className="menu-links">
                        <div className="d-flex align-items-center gap-15">
                            <NavLink  to="/">Home</NavLink>
                            <NavLink  to="/store">Our Store</NavLink>
                            <NavLink  to="/blogs">Blogs</NavLink>
                            <NavLink  to="/contact">Contact</NavLink>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    );
};

export default Header;