import { React, useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./login.scss";
import Logo from "../../logo-white.svg";
import { Link } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";
import Loader from "react-loaders";
import { axiosRequest } from "../../api/axios";
const AD_URL = "api/v1/featured-image";

const Login = () => {
  // const [show, setShow] = useState(false);
  const [adurl, setAdurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/akosombo.png`
  );
  const [adlogourl, setLogoadurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/logo.png`
  );
  const [addata, setAddata] = useState({});
  const [adsloader, setAdsLoader] = useState(true);

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    setAdsLoader(true);
    try {
      const response = await axiosRequest.get(AD_URL)
      const data = response?.data.data[0];
      setAddata(data)
      setAdsLoader(false);

    } catch (err) {
      console.log(err.response);
      setAdsLoader(false);
    }
  }

  return (
    <>
      <div className="no-scroll-wrapper">
        <div className="row h-100 g-0">
          <div className="col-12 col-lg d-none d-lg-block">
            <div className="position-relative h-100">
              {adsloader ?
                <Loader
                  type="ball-scale-ripple-multiple"
                />
                :
                <div
                  className="ad-section"
                  style={{ backgroundImage: `url(${adurl})` }}
                >
                  <div className="ad-caption">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="me-4">
                        <img src={adlogourl} alt="rate" width={100} className="" />
                      </div>

                      <div className="text-center ad-text">
                        <h4>
                          {addata?.header || "Kakum National Park - Ghana"}
                        </h4>
                        <p className="mb-0 fw-light">
                          {addata?.body || "The Akosombo Dam, also known as the Volta Dam, is a hydroelectric dam on the Volta River in southeastern Ghana in the Akosombo gorge and part of the Volta River Authority. The construction of the dam flooded part of the Volta River Basin, and led to the subsequent creation of Lake Volta."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
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
                    <div>
                      <div className="bg-white p-4 p-lg-5" style={{ borderRadius: "20px 20px 0 0" }}>
                        <h6 className="fw-bold">
                          Log in with your phone number
                        </h6>


                        <LoginForm />
                      </div>
                      <div className="bg-primary py-4">
                        <div className="m-0 small text-center text-white">
                          Don't have an account? &nbsp;

                          <Dropdown className="d-inline">
                            <Dropdown.Toggle className="btn text-orange" id="dropdown-basic">
                              Sign Up
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item className="fw-bold small" href="worker-signup">Offer Services</Dropdown.Item>
                              <Dropdown.Item className="fw-bold small" href="user-signup">Find Someone</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

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
    </>
  );
};

export default Login;
