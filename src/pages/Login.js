import React from 'react';
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Meta title={"Login"}/>
    <BreadCrumb title="Login"/>
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'> Login </h3>
            <form action='' className='d-flex flex-column gap-30'>
              <div >
                <input type='Email' name='email' placeholder='Email' className='form-control'/>
              </div>
              <div >
                <input type='Password' name='password' placeholder='Password' className='form-control'/>
              </div>
              <div>
                <Link to='/forgot-password'>Forgot Password?</Link>
                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                  <button className='button border-0' type='submit'>
                    LogIn
                  </button>
                  <Link to='/signup' className='button'>SignUp</Link>
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

export default Login;