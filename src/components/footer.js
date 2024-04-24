import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';
const Footer = () => {
    return (
    <>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src="images/newsletter.png" alt="newsletter"/>
                            <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                    <div className="input-group">
                    <input type="text" className="form-control py-1" placeholder="Your E-mail Address" aria-label="Your E-mail Address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">
        Subscribe
      </span>
      </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
             <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-white mb-4">Contact Us</h4>
                        <div>
                            <address className="text-white">H No. :277 Near Sunder Nagar,<br/>
                                 Dagania, Raipur, Chhattisgarh <br/>
                                 Pincode: 492001</address>
                                 <a href="tel:*91 80854-68967" className="mt-4 d-block mb-1 text-white">*91 8085468967</a>
                                 <a href="mailto: organio15@gmail.com" className="mt-2 d-block mb-0 text-white">organio15@gmail.com</a>
                                 <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                    <a className="text-white" href="#">
                                        <BsLinkedin className="text-white fs-5"/>
                                    </a>
                                    <a className="text-white" href="#">
                                        <BsGithub className="text-white fs-5"/>
                                    </a>
                                    <a className="text-white" href="#">
                                        <BsInstagram className="text-white fs-5"/>
                                    </a>
                                    <a className="text-white" href="#">
                                        <BsYoutube className="text-white fs-5"/>
                                    </a>
                                 </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Information</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                            <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                            <Link to='shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                            <Link to='terms-and-condition-policy' className='text-white py-2 mb-1'>Terms of Service</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Account</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className='text-white py-2 mb-1'>About Us</Link>
                            <Link className='text-white py-2 mb-1'>FAQ</Link>
                            <Link className='text-white py-2 mb-1'>Contact</Link>
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className="text-white mb-4">Quick Liks</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className='text-white py-2 mb-1'>Groceries</Link>
                            <Link className='text-white py-2 mb-1'>Vegetables</Link>
                            <Link className='text-white py-2 mb-1'>Fruits</Link>
                            <Link className='text-white py-2 mb-1'>Farming</Link>
                        </div>
                    </div>  
                </div>
             </div>
        </footer> 
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Organo. </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;