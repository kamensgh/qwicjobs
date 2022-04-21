import {React, useState }  from 'react';
import './login.scss';
import Logo from '../../logo-white.svg';
import { Link } from 'react-router-dom';
import Modal from "../../components/Otpmodal"


const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
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
                    <Link to="/">
                      <img src={Logo} alt="logo" width={170} />
                    </Link>
                  </div>

                  <div className="mt-4 pt-2">
                    <div
                      className="overflow-hidden"
                      style={{ borderRadius: '20px 20px 0 0' }}
                    >
                      <div className="bg-white p-4 p-lg-5">
                        <h6 className="fw-bold">Log in with your phone number</h6>

                        <div className="mt-4">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlInput1"
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
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Enter Your Password"
                            />
                          </div>

                          <button className="btn btn-secondary mt-3 w-100" onClick={handleShow}>
                            SEND CODE
                          </button>
                        </div>
                      </div>
                      <div className="bg-primary py-4">
                        <p className="m-0 small text-center text-white">
                          Don't have an account? &nbsp;
                          <Link to="/user-signup" className="text-orange">
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

      <Modal show={show} onHide={handleClose}/>
    </>
  );
};

export default Login;
