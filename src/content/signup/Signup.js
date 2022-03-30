import React from 'react'
import "./signup.scss"
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';



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
                <img src={Logo} alt="logo" width={170} />
              </div>
              <div className='mt-4'>
                  <p className='text-muted text-center'>Your information is secured and will not be shared with any third party</p>
              </div>

              <div className="mt-4 pt-2">
                <div>
                  <div className="">

                    <div className="mt-4">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                         First Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="eg. Kwame"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                         Surname
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="eg. Mensah"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                         Contact Number
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="eg. 0244123456"
                        />
                      </div>

                        <div className='d-flex justify-content-between align-items-center mt-5'>
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">I Accept All T&C’s</label>
                                </div>
                            </div>
                            
                            <button className="btn btn-secondary">
                               SIGN UP
                            </button>
                        </div>

                        <div className='mt-5'>
                        <Link to="/password" className="">
                        Password Reset 
                        </Link>
                            <span className='px-3'>|</span>
                        <Link to="/login" className="text-orange fw-bold">
                          Login
                        </Link>
                        </div>
                    </div>
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