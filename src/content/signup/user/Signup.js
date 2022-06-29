import { React, useState, useEffect } from "react";
import "./signup.scss";
import Logo from "../../../logo.svg";
import { Link } from "react-router-dom";
import ClientForm from "../../../components/register/ClientForm";
import Loader from "react-loaders";
import { axiosRequest } from "../../../api/axios";
const AD_URL = "api/v1/featured-image";

const Signup = () => {
  const [adurl, setAdurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/akosombo.png`
  );
  const [adlogourl, setLogoadurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/logo.png`
  );
  const [addata, setAddata] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // getAds()
  }, []);

  const getAds = async () => {
    setLoader(true);
    try {
      const response = await axiosRequest.get(AD_URL);
      const data = response?.data.data[0];
      setAddata(data);
      setLoader(false);
    } catch (err) {
      console.log(err.response);
      setLoader(false);
    }
  };

  return (
    <div className="no-scroll-wrapper">
      <div className="row h-100 g-0">
        <div className="col-12 col-lg d-none d-lg-block">
          <div className="position-relative">
            <Loader
              type="ball-scale-ripple-multiple"
              className={`${addata ? "d-none" : ""}`}
            />
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
                      {addata.header
                        ? addata.header
                        : "Kakum National Park - Ghana"}
                    </h4>
                    <p className="mb-0 fw-light">
                      {addata.body
                        ? addata.body
                        : "The Akosombo Dam, also known as the Volta Dam, is a hydroelectric dam on the Volta River in southeastern Ghana in the Akosombo gorge and part of the Volta River Authority. The construction of the dam flooded part of the Volta River Basin, and led to the subsequent creation of Lake Volta."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <div className="mt-4">
                  <p className="text-muted text-center">
                    Your information is secured and will not be shared with any
                    third party
                  </p>
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
  );
};

export default Signup;
