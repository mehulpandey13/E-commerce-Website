import React from 'react';
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"}/>
    <BreadCrumb title="Forgot Password"/>

    <div className='login-wrapper home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'> Reset Your Password </h3>
            <p className='text-center mt-2 mb-3'>Email will be sent to reset your Password</p>
            <form action='' className='d-flex flex-column gap-30'>
              <div >
                <input type='Email' name='email' placeholder='Email' className='form-control'/>
              </div>
              <div>
                <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap-15'>
                  <button className='button border-0' type='submit'>
                    Submit
                  </button>
                  <Link to='/login'>Cancel?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div> 
    </>
  );
};

export default Forgotpassword;