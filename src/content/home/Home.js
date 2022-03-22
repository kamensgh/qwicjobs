import React from 'react';
import './home.scss';
import { Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="home-banner">
        <div className="container h-100">
          <Row className="h-100">
            <Col>
              <div className="h-100 d-flex flex-column justify-content-center">
                <h1 className="banner-text mb-4">
                  We all need help sometimes, we help you find the best.
                </h1>

                <p className="text-white mb-5">
                  Welcome to Qwicjobs. We help you source the best help for your
                  everyday needs. Search, Find, Employ. It’s that simple.
                </p>

                <div className="d-flex">
                  <div className="me-5">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/banner-stars.png`}
                      alt="rate"
                      width={180}
                    />
                  </div>
                  <Button variant="light" className="fw-bold">
                    How it Works
                  </Button>
                </div>
              </div>
            </Col>
            <Col>2 of 2</Col>
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
            <div className="col">
              <h1 className="fw-bold text-success">4.9/5</h1>
              <p>Average rating of talent from several reviews</p>
            </div>
            <div className="col">
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
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
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
    </>
  );
};

export default Home;
