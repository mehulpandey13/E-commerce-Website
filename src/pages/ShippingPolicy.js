import React from 'react'
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <>
    <Meta title={"Shipping Policy"}/>
    <BreadCrumb title="Shipping Policy"/>
    <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ShippingPolicy