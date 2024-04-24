import React from "react";
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import {AiOutlineHome} from 'react-icons/ai';
import {BiSolidPhoneCall} from 'react-icons/bi';
import {AiTwotoneMail} from 'react-icons/ai';
import {AiFillInfoCircle} from 'react-icons/ai';
const Contact = () => {
    return (
    <>
    <Meta title={"Contact"}/>
    <BreadCrumb title="Contact"/>
    <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14875.722713066141!2d81.6019412762647!3d21.234597324512208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzA0LjYiTiA4McKwMzYnMzYuMSJF!5e0!3m2!1sen!2sin!4v1691448339273!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 mt-5">
                    <div className="contact-wrapper d-flex justify-content-between">
                        <div>
                            <h3 className="contact-title mb-4">
                                Contact
                            </h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div>
                                    <input type="text" className="form-control" placeholder="Email"/>
                                </div>
                                <div>
                                    <input type="text" className="form-control" placeholder="Mobile No."/>
                                </div>
                                <div>
                                    <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                                </div>
                                <div>
                                    <button className="button border-0">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h3 className="contact-title mb-4">
                                Get In Touch With Us
                            </h3>
                            <div className="contact-inner-wrapper">
                                <ul className="ps-0">
                                    <li className="mb-3">
                                        <AiOutlineHome className="fs-5"/>
                                        <address className="mb-0">H No. 1 arjun vihar, teacher's colony, dagania, raipur (cg)</address>
                                    </li>
                                    <li className="mb-3">
                                        <BiSolidPhoneCall className="fs-5"/>
                                        <a href="*918085468967">*91 80854 68967</a>
                                        </li>
                                    <li className="mb-3">
                                        <AiTwotoneMail className="fs-5"/>
                                        <a href="mailto:organo15@gmail.com">organo15@gmail.com</a>
                                        </li>
                                    <li className="mb-3">
                                        <AiFillInfoCircle className="fs-5"/>
                                        <p className="mb-0">Monday - Friday :: 10 A.M - 8 P.M</p>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Contact;