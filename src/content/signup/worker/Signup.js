import React, { useState, useEffect } from "react";
import "./signup.scss";
import Logo from "../../../logo.svg";
import Stepone from "../../../components/register/Stepone";
import Steptwo from "../../../components/register/Steptwo";
import { axiosRequest } from "../../../api/axios";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
const AD_URL = "api/v1/featured-image";

const Signup = () => {
  const [adurl, setAdurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/akosombo.png`
  );
  const [adlogourl, setLogoadurl] = useState(
    `${process.env.PUBLIC_URL}/images/ads/logo.png`
  );
  const [addata, setAddata] = useState({});

  const [adsloader, setAdsLoader] = useState(true);

  const [pages, setPages] = useState(2);
  const [formData, setFormData] = useState({
    user: {
      firstName: "",
      surname: "",
      otherNames: "",
      email: "",
      password: "",
      phoneNumber: "",
      otherNumber: "",
      userTypeId: 4,
    },
    provider: {
      aboutSelf: "",
      cityId: 1
    },
    bio: {
      dob: "",
      profilePicture: "",
      idTypeId: 1,
      idNumber: "",
      idImage: "",
      residence: "",
      genderId: 0,
    },
    services: [],
    hasHealthCondition: false,
    education: []
  });

  const registerForms = () => {
    const components = {
      1: (
        <Stepone
          setPages={setPages}
          formData={formData}
          setFormData={setFormData}
        />
      ),
      2: <Steptwo formData={formData} setFormData={setFormData} />,
    };
    return components[pages] || components[1];
  };

  useEffect(() => {
    getAds()
  }, []);

  const getAds = async () => {
    setAdsLoader(true);
    try {
      const response = await axiosRequest.get(AD_URL);
      const data = response?.data.data[0];
      setAddata(data);
      setAdsLoader(false);
    } catch (err) {
      console.log(err.response);
      setAdsLoader(false);
    }
  };

  return (
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
            }
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="signup-wrapper justify-content-between flex-column align-items-stretch">
            <div>
              <div className="bg-white p-4 p-xl-5">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-11 col-xl-10">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h4 className="fw-bold mb-0">Registration</h4>
                      </div>
                      <div>
                        <Link to="/">
                          <img src={Logo} alt="logo" width={170} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 p-xl-5">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-11 col-xl-10">
                    {registerForms()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 px-xl-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-11 col-xl-10">
                  <Link to="/" className="text-danger">
                    I NEED HELP
                  </Link>
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
