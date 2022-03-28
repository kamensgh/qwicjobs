import React from 'react';
import './login.scss';
import Logo from '../../logo-white.svg';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="no-scroll-wrapper">
      <div className="row h-100 g-0">
        <div className="col-12 col-lg d-none d-lg-block">
          <div className=""></div>
        </div>
        <div className="col-12 col-lg-6 col-xl-5">
          <div className="login-wrapper">
            <div className="row g-0 flex-fill justify-content-center">
              <div className="col-11 col-md-6 col-lg-6 col-xl-7">
                <div className="text-center">
                  <img src={Logo} alt="logo" width={170} />
                </div>

                <div className="mt-4 pt-2">
                  <div
                    className="overflow-hidden"
                    style={{ borderRadius: '20px 20px 0 0' }}
                  >
                    <div className="bg-white p-4 p-lg-5">
                      <h6 className="fw-bold">Log in with your phone number</h6>

                      <div className="mt-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Enter Phone Number
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="0244123456"
                          />
                        </div>

                        <button className="btn btn-secondary mt-3 w-100">
                          SEND CODE
                        </button>
                      </div>
                    </div>
                    <div className="bg-primary py-4">
                      <p className="m-0 small text-center text-white">
                        Already have an account? &nbsp;
                        <Link to="/signup" className="text-orange">
                          SIGNUP
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
