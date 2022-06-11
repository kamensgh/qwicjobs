import React from 'react';
import './home.scss';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Homecarousel from '../../components/Homecarousel'

const Home = () => {
  return (
    <>
      <div className="home-banner">
        <div className="container h-100">
          <Row className="h-100 overflow-hidden">
            <div className='col-12 col-md-6 h-100'>
              <div className="h-100 d-flex flex-column justify-content-center">
                <h1 className="banner-text mb-4">
                  We all need help sometimes, we help you find the best.
                </h1>

                <p className="text-white mb-5">
                  Welcome to Qwicjobs. We help you source the best help for your
                  everyday needs. Search, Find, Employ. It’s that simple.
                </p>

                <div className="d-flex flex-wrap align-items-center">
                  <div className="me-5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/banner-stars.png`}
                      alt="rate"
                      width={180}
                      className="mb-4 mb-lg-0"
                    />
                  </div>
                  <Link to="/how-it-works" className="fw-bold btn btn-light">
                    How it Works
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 h-100'>
              <Homecarousel/>
            </div>
          </Row>
        </div>
      </div>
      <div className="section">
        <div className="container h-100">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="me-0 me-lg-5">
                <h1 className="fw-bold">
                  Get the <span className="text-orange">Help you Need </span>
                  instantly
                </h1>
                <p>
                  Nannies, domestic helpers, Cooks, Gardeners, Cleaners Home
                  tutors, among others. Get all the help you need
                </p>
              </div>
            </div>
            <div className="col-12 col-md">
              <h1 className="fw-bold text-success">4.9/5</h1>
              <p>Average rating of talent from several reviews</p>
            </div>
            <div className="col-12 col-md">
              <h1 className="fw-bold text-success">Top skills</h1>
              <p>
                We do not only hand pick Our helpers, we also give Them world
                class training
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section pb-0 bg-light">
        <div className="container h-100">
          <div className="row justify-content-around">
            <div className="col-12 col-md-6 col-lg-5">
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img1.png`}
                  alt="rate"
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5">
              <div className="h-100 d-flex justify-content-center align-items-center">
                <div>
                  <h1 className="fw-bold">
                    Cut down on stress Get professional help today
                  </h1>
                  <p>
                    We connect you to some of the finest people around you to
                    offer their services when you most need it. You have the
                    power to choose and employ whoever you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section pb-0">
        <div className="container h-100">
          <div className="row justify-content-around">
            <div className="col-12 col-md-6 col-lg-5 order-1 order-md-0">
              <div className="h-100 d-flex justify-content-center align-items-center">
                <div>
                  <h1 className="fw-bold">Raising kids has never been easy</h1>
                  <p>
                    Juggling parenting, career and the demands of life in
                    general can have a toll on anyone if not properly managed.
                    With Qwikjobs, you can find trusted Nannies and domestic
                    help. You don’t have to do it all alone.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1">
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img2.png`}
                  alt="rate"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-light">
        <div className="container h-100">
          <h3 className="text-center mb-5 fw-bold">Process</h3>

          <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4 mb-md-0 col-xl-3">
              <div
                className="card h-100  text-center p-4 p-lg-5"
                style={{ borderRadius: '20px' }}
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/svg/search.svg`}
                    alt="rate"
                    className=""
                    height={60}
                  />

                  <h4 className="fw-bold mt-2">Search</h4>
                </div>
                <div className="mt-4">
                  <p>
                    Quickly sign up with few clicks and search for the help you
                    need
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 col-xl-3">
              <div
                className="card h-100 text-center p-4 p-lg-5"
                style={{ borderRadius: '20px' }}
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/svg/find.svg`}
                    alt="rate"
                    className=""
                    height={60}
                  />

                  <h4 className="fw-bold mt-2">Find</h4>
                </div>
                <div className="mt-4">
                  <p>Find the help you need and begin a conversation</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 col-xl-3">
              <div
                className="card h-100 text-center p-4 p-lg-5"
                style={{ borderRadius: '20px' }}
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/svg/users.svg`}
                    alt="rate"
                    className=""
                    height={60}
                  />

                  <h4 className="fw-bold mt-2">Employ</h4>
                </div>
                <div className="mt-4">
                  <p>If they fit for your needs, simply give them an offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section become-a-qwicjobber">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-xl-3">
              <div
                className="card text-white bg-primary text-center p-4 p-lg-5"
                style={{ borderRadius: '20px' }}
              >
                <div>
                  <h3 className="fw-bold mt-2 text-white">
                    Become a Qwicjobber
                  </h3>
                </div>
                <div className="mt-4">
                  <p>Make money giving your services to people close to you</p>

               

                  <Link to="/worker-signup" className="btn btn-light rounded-pill">
                    Join now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
