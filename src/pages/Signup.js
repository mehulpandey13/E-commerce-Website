import React from 'react'
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"}/>
    <BreadCrumb title="Sign Up"/>
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'> SignUp </h3>
            <form action='' className='d-flex flex-column gap-30'>
              <div >
                <input type='text' name='name' placeholder='First Name' className='form-control'/>
              </div>
              <div >
                <input type='text' name='name' placeholder='Last Name' className='form-control'/>
              </div>
              <div >
                <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control'/>
              </div>
              <div >
                <input type='Password' name='password' placeholder='Password' className='form-control'/>
              </div>
              <div>
                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                  <button className='button border-0'>
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Signup

