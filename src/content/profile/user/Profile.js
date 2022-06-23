import React, { useEffect, useState } from 'react'
import "./profile.scss";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useStateContext } from '../../../contexts/ContextProvider';
import Shimmer from 'react-js-loading-shimmer';
import Moment from 'moment';
import axios from '../../../api/axios';
const JOBS_URL = 'api/v1/default/service';




const Profile = () => {
  const now = 60;
  const { userInfo } = useStateContext();
  const [loading, setloading] = useState(true)
  const [jobs, setJobs] = useState([]);
  const formatDate = Moment().format('dddd, MMMM Do')
  const baseURL = 'https://qwicjobs-api.herokuapp.com'

  useEffect(() => {
    getJobs()
  }, []);

  const getJobs = async () => {
    setloading(true);
    try {
      const response = await axios.get(JOBS_URL)
      const res = response.data.data;
      let newData = [];
      newData = res.map(job => ({ value: job.id, label: job.name, src: `${baseURL}/assets/icons/${job.name}.png` }));
      setJobs(newData)
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  }


  const jobsPlaceholder = () => {
    const n = 20;
    return [...Array(n)].map((elem, index) =>
      <div className='mb-3' key={index}>
        <div className='d-flex'>
          <div style={{ width: '30px' }}>
            <Shimmer height={"22px"} />
          </div>
          <div className='w-100 ms-3'>
            <Shimmer height={"25px"} />
          </div>
        </div>
      </div>
    );
  }


  console.log(userInfo);
  return (
    <div className="bg-light">
      <div className="container">
        <div className="bg-white shadow-sm">
          <div className="border-bottom">
            <div className="row g-0">
              <div className="col-12 col-md-8">
                <div className="d-flex flex-wrap justify-content-between align-items-center border-end p-5">
                  <div className="pe-4">
                    <h5 className="fw-bold">{formatDate}</h5>
                    <h2 className="fw-bold" style={{ textTransform: 'capitalize' }}>Good Evening, {userInfo.data.firstName ?? "Kwame"}</h2>
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
              <div className="col-12 col-md-4">
                <div className="p-4 border-bottom">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold mb-0">My Postings</p>

                    <Link to="/myprofile" className="text-success mb-0 fw-bold">
                      My Profile
                    </Link>
                  </div>
                </div>
                <div className="pt-4 px-5">
                  <div className="text-center">
                    <p className="mb-1 small fw-bold ">Profile completeness</p>

                    <div>
                      <ProgressBar now={now} label={`${now}%`} />
                    </div>

                    <div className="text-center py-4">
                      <button className="btn rounded-pill btn-sm btn-info">
                        Post a Job
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row g-0">
              <div className="col-12 col-md-3">
                <div className="mt-2 h-100 p-4">
                  <div className='jobs-container'>
                    <div className='jobs-list'>
                      {jobs ?
                        (jobs.map((job) =>
                          <a
                            key={job.value}
                            href="/"
                            className="text-decoration-none d-flex mb-3 align-items-center justify-content-start"
                          >
                            <span className="me-3">
                              <img
                                src={job.src}
                                alt="rate"
                                width={30}
                              />
                            </span>
                            {job.label}
                          </a>
                        ))
                        :
                        jobsPlaceholder()
                      }
                    </div>
                    <div className='footer border-top pt-3 mb-1 mt-5 text-muted'>
                      <div className='d-flex mb-1 justify-content-between'>
                         <Link to="/">
                          Privacy  
                        </Link>	&#8226;
                        <Link to="/">Advertising</Link>	&#8226;
                        <Link to="/">Terms of use</Link>	&#8226;
                        <Link to="/">More</Link>
                      </div>
                      <div>
                        <span> Qwicjobs © 2022</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col border-start">
                <div className="d-flex justify-content-md-between flex-wrap justify-content-center py-3 align-items-center px-4">
                  <h6 className="text-success mb-0 fw-bold">
                    Qwikjobbers close to you
                  </h6>

                  <div className="mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for jobs…"
                      id="validationDefault01"
                    />
                  </div>
                </div>

                <div className="px-4 mt-2">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            Joining noble helps has given me the opportunity to
                            serve with my skills and training acquired. As a
                            professional nurse, I love giving care.
                          </p>
                          <Link to="/workerDetails" className="stretched-link"></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg2.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            Get free whole health insurance cover from us to
                            cover you in an event of maternity hospital cover,
                            Maternity life cover, 24/7 doctor service and more
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg3.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg4.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            Joining noble helps has given me the opportunity to
                            serve with my skills and training acquired. As a
                            professional nurse, I love giving care.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg2.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            Get free whole health insurance cover from us to
                            cover you in an event of maternity hospital cover,
                            Maternity life cover, 24/7 doctor service and more
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg3.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg4.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div>
                            <h5 className="card-title fw-bold text-center mb-0">
                              Card title
                            </h5>
                            <p className="text-center">Carpenter</p>
                          </div>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
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
      </div>
    </div>
  );
};

export default Profile;
