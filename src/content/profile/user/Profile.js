import React from 'react'
import './profile.scss'
import { Link } from 'react-router-dom';


const Profile = () => {
  return (
    <div className='bg-light'>
        <div className='container'>
            <div className='bg-white shadow-sm'>

                <div className='border-bottom'>
                    <div className='row g-0'>
                        <div className='col-12 col-md-8'>
                            <div className='d-flex flex-wrap justify-content-between align-items-center border-end p-5'>
                                <div className='pe-4'>
                                    <h5 className='fw-bold'>Sunday, February 6th</h5>
                                    <h2 className='fw-bold'>Good Evening, Roland O.</h2>
                                </div>
                                <div>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/avatar.png`}
                                        alt="rate"
                                        className=""
                                        height={150}
                                    />
                                </div>

                            </div>

                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='p-4 border-bottom'>
                                <div className='d-flex justify-content-between'>

                                    <p className='fw-bold mb-0'>My Postings</p>

                                    <Link to="/myprofile" className="text-success mb-0 fw-bold">
                                         My Profile
                                    </Link>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div>
                    <div className='row g-0'>
                        <div className='col-12 col-md-3'>

                        </div>
                        <div className='col border-start'>
                            <div className='d-flex justify-content-md-between flex-wrap justify-content-center py-3 align-items-center px-4'>
                                <Link to="/myprofile" className="text-success mb-0 fw-bold">
                                Qwikjobbers close to you
                                </Link>

                                <div className='mt-3 mt-md-0'>
                                <input type="text" class="form-control" id="validationDefault01" value="Mark" />
                                </div>


                            </div>

                            <div className='px-4 mt-5'>
                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
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
            </div>

        </div>
        
    </div>
  )
}

export default Profile