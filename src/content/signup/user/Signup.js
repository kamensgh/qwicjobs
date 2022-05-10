import React from 'react'
import "./signup.scss"
import Logo from '../../../logo.svg';
import { Link } from 'react-router-dom';

import ClientForm from '../../../components/register/ClientForm';



const Signup = () => {
  return (
    <div className="no-scroll-wrapper">
      <div className="row h-100 g-0">
        <div className="col-12 col-lg d-none d-lg-block">
          <div className=""></div>
        </div>
        <div className="col-12 col-lg-6 col-xl-5">
          <div className="signup-wrapper">
            <div className="row g-0 flex-fill justify-content-center">
              <div className="col-11 col-md-6 col-lg-7 col-xl-7">
                <div className="text-center">
                  <Link to="/">
                    <img src={Logo} alt="logo" width={170} />
                  </Link>
                </div>
                <div className='mt-4'>
                  <p className='text-muted text-center'>Your information is secured and will not be shared with any third party</p>
                </div>

                <div className="mt-4 pt-2">
                  <div>
                    <div className="">
                      <ClientForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup