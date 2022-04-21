import React from 'react'
import "./signup.scss"
import Logo from '../../../logo.svg';
import Stepone from '../../../components/register/Stepone'
import Steptwo from '../../../components/register/Steptwo'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="no-scroll-wrapper">
      <div className="row h-100 g-0">
        <div className="col-12 col-lg d-none d-lg-block">
          <div className=""></div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="signup-wrapper justify-content-between flex-column align-items-stretch">
            <div>
              <div className='bg-white p-4 p-xl-5'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-md-12 col-lg-11 col-xl-10'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h4 className='fw-bold mb-0'>Registration</h4>
                      </div>
                      <div>
                        <Link to="/"><img src={Logo} alt="logo" width={170} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 p-xl-5">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-11 col-xl-10">

                    <Stepone />
                    <Steptwo />


                  </div>
                </div>
              </div>
            </div>

            <div className='p-4 px-xl-5'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-12 col-lg-11 col-xl-10'>
                  <Link to="/" className="text-danger">I NEED HELP</Link>
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