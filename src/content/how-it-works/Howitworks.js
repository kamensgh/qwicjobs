import React from 'react'
import './howitworks.scss'
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Howitworks = () => {
  return (
    <>
     <div className="howitworks-banner p-0">
        <div className="container h-100">
          <Row className="h-100 overflow-hidden row justify-content-between">
            <div className='col-12 col-md-6 col-xl-5'>
              <div className="h-100 d-flex flex-column justify-content-center">
                <h1 className="banner-text mb-4 display-4">
                Find someone to fix it for you
                </h1>

                <p className="text-white mb-xl-5">
                Connect with people that can help solve Your handyman problems and hire them.
                </p>

                <div className="d-flex flex-wrap">
                    <Link to="/worker-signup" className="btn btn-light fw-bold">
                        Find a Qwicjobber Now
                    </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-5'>
                <div className='h-100 d-flex align-items-end'>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/bannerimg3.png`}
                        alt="rate"
                        className="w-100"
                        />
                </div>

            </div>
          </Row>
        </div>
      </div>
      <div className='bg-light'>
          <div className='container'>
              <div className='bg-white px-3 shadow-sm'>

                <div className='py-5 mb-5'>
                  <h1 className='text-center mt-5'>How it Works?</h1>
                  <p className='text-center line-height-1half h5'>QwicJobs is a hub for talents across all technical fields</p>


                  <div className='row justify-content-center'>
                      <div className='col-12 col-md-11 col-lg-10'>
                            <div className='row justify-content-between align-items-center mt-5 pt-5'>
                                <div className='col-12 col-md-6 col-lg-5'>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/animate1.png`}
                                        alt="rate"
                                        className="w-100 mb-5 mb-lg-0"
                                        />

                                </div>

                                <div className='col-12 col-md-12 col-lg-6'>
                                    <h3 className='text-success mb-3'>ON-DEMAND QUICK HELP</h3>
                                    <p className='h5 fw-light'  style={{ lineHeight:'1.6' }}>On Qwicjobs, you can <span className='text-orange fw-bold'>easily find someone to fix almost any quick job</span> . 
                                    These are skilled individuals offering their services. Being it your plumbing needs, carpentry works, pedicure, car problems and many more.</p>
                                </div>
                            </div>
                            <div className='row justify-content-between align-items-center mt-5 pt-5'>
                                <div className='col-12 col-md-12 col-lg-6 order-1 order-lg-0'>
                                    <h3 className='text-success mb-3'>HOW IT IS DONE</h3>
                                    <p className='h5 fw-light' style={{ lineHeight:'1.6' }}>Individuals with problems signs up and and search through the list of individuals 
                                    offering services or post their needs. A skilled person applies based on their skill. Client offers
                                     the job to the qwicjobber and gets the job done. <span className="text-orange fw-bold">Its that simple.</span> </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-5 order-0 order-lg-1'>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/animate2.png`}
                                        alt="rate"
                                        className="w-100 mb-5 mb-lg-0"
                                        />

                                </div>
                            </div>
                      </div>

                  </div>
                </div>

                <div className='border-top py-5'>

                    <div className='row my-4 justify-content-center'>
                        <div className='col-12 col-md-11 col-lg-10'>

                            <div className='row justify-content-around'>
                                <div className='col-12 col-md-6 col-lg-4 mb-5 mb-lg-0'>

                                    <div className='text-center'>
                                        <h5 className='fw-bold line-height-1half'>WANT TO MAKE MONEY OFFERING YOUR SERVICES?</h5>
                                        <Link to="/worker-signup" className="btn btn-primary rounded-pill fw-bold mt-2">
                                            SIGN UP HERE
                                        </Link>
                                    </div>

                                </div>
                                <div className='col-12 col-md-6 col-lg-4'>

                                    <div className='text-center'>
                                        <h5 className='text-success line-height-1half fw-bold'>WANT TO MAKE MONEY OFFERING YOUR SERVICES?</h5>
                                        <button className='btn btn-secondary rounded-pill fw-bold mt-2'>FIND HELP HERE</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

              </div>

              <div className='pt-5 mt-4'>

                <div className='text-center'>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/stars.png`}
                        alt="rate"
                        className="mb-2"
                        width={190}
                        />
                  <h4 className='text-center'>Qwicjobbers around this Location</h4>
                </div>

                <div className='mt-5'>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg1.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">Joining noble helps has given me the opportunity to serve with my skills and training acquired. As a professional nurse, I love giving care.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg2.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">Get free whole health insurance cover from us to cover you in an event of maternity hospital cover, Maternity life cover, 24/7 doctor service and more</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg3.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg4.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg1.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">Joining noble helps has given me the opportunity to serve with my skills and training acquired. As a professional nurse, I love giving care.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg2.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">Get free whole health insurance cover from us to cover you in an event of maternity hospital cover, Maternity life cover, 24/7 doctor service and more</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg3.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/images/cardimg4.png`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title fw-bold text-center mb-0">Card title</h5>
                                    <p className='text-center'>Carpenter</p>
                                </div>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>

          </div>

      </div>
    </>
  )
}

export default Howitworks