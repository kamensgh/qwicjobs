import React from 'react';
import Logo from '../../logo-white.svg';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-5 mb-lg-0">
              <img src={Logo} alt="logo" width={170} />

              <p className="mt-4">
                Our agency is an image of quality and professionalism combined
                with hard work and precision. You can expect only the best
                services from our staff.
              </p>

              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/svg/facebook.svg`}
                  alt="rate"
                  className="me-3"
                />

                <img
                  src={`${process.env.PUBLIC_URL}/images/svg/twitter.svg`}
                  alt="rate"
                  className="me-3"
                />

                <img
                  src={`${process.env.PUBLIC_URL}/images/svg/linkd.svg`}
                  alt="rate"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="mb-5 mb-lg-0">
              <h4 className="fw-bold">Useful links</h4>
              <ul className="list-inline mt-0 pt-0 mt-md-4 pt-md-3">
                <li className="mb-2">
                  <Link to="/blog" className="text-white">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/testimonials" className="text-white">
                    Testimonials
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/knowledge" className="text-white">
                    Knowledge Base
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="mb-5 mb-lg-0">
              <h4 className="fw-bold">Company</h4>
              <ul className="list-inline mt-0 pt-0 mt-md-4 pt-md-3">
                <li className="mb-2">
                  <Link to="/jobs" className="text-white">
                    Jobs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services" className="text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="mb-5 mb-lg-0">
              <h4 className="fw-bold">Contact Info</h4>
              <ul className="list-inline mt-0 pt-0 mt-md-4 pt-md-3">
                <li className="mb-2">
                  <Link to="/" className="text-white d-flex">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/svg/mail.svg`}
                      alt="rate"
                      className="me-3"
                    />
                    help@qwicjobs.com
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-white d-flex">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/svg/phone.svg`}
                      alt="rate"
                      className="me-3"
                    />
                    +0320&nbsp;422&nbsp;4254&nbsp;/&nbsp;+233&nbsp;244&nbsp;5654
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-white d-flex">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/svg/pin.svg`}
                      alt="rate"
                      className="me-3"
                    />
                    Main Str Atlantic Towers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top mt-5 py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <p className='text-center text-md-start'>Copyright ©2021 All rights reserved | Qwicjobs</p>

            <Link to="/" className="text-white text-center text-md-end">
              www.qwicjobs.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
