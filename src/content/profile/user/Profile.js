import React, { useEffect, useState } from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Shimmer from "react-js-loading-shimmer";
import Providers from "../../../components/user/ServiceproviderCards"
import Pagination from "../../../components/Pagination"
import Moment from "moment";
import { axiosRequest } from "../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const JOBS_URL = "api/v1/default/service";

const Profile = () => {
  const verified = <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '19px' }} />;
  const now = 60;
  const [loadingJobs, setloadingJobs] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [userData, setUserData] = useState([])
  const formatDate = Moment().format("dddd, MMMM Do");
  const baseURL = "https://qwicjobs-api.herokuapp.com";



  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    const info = () => {
      let data = localStorage.getItem('currentUser');
      setUserData(JSON.parse(data));
    }

    info();
  }, [userData.id]);

  const getJobs = async () => {
    setloadingJobs(true);
    try {
      const response = await axiosRequest.get(JOBS_URL);
      const res = response.data.data;
      let newData = [];
      newData = res.map((job) => ({
        value: job.id,
        label: job.name,
        src: `${baseURL}/assets/icons/${job.name}.png`,
      }));
      setJobs(newData);
      setloadingJobs(false);
    } catch (err) {
      console.log(err);
      setloadingJobs(false);
    }
  };

  const jobsPlaceholder = () => {
    const n = 20;
    return [...Array(n)].map((elem, index) => (
      <div className="mb-3" key={index}>
        <div className="d-flex userjobs">
          <div style={{ width: "30px" }}>
            <Shimmer height={"25px"} width={"10px"} /> 
          </div>
          <div className="w-100 ms-3">
            <Shimmer height={"25px"} />
          </div>
        </div>
      </div>
    ));
  };  

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
                    <h2
                      className="fw-bold"
                      style={{ textTransform: "capitalize" }}
                    >
                      Good Evening, {userData?.firstName}
                    </h2>
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
                      <Link to='/postjob' className="btn rounded-pill btn-sm btn-info">
                        Post a Job
                      </Link>
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
                  <div className="jobs-container">
                    <div className="jobs-list">
                      {!loadingJobs
                        ? jobs.map((job, index) => (
                            <a
                              key={index}
                              href="/"
                              className="text-decoration-none d-flex mb-3 align-items-center justify-content-start"
                            >
                              <span className="me-3">
                                <img src={job.src} alt="rate" width={30} />
                              </span>
                              {job.label}
                            </a>
                          ))
                        : jobsPlaceholder()}
                    </div>
                    <div className="footer border-top pt-3 mb-1 mt-5 text-muted">
                      <div className="d-flex mb-1 justify-content-between">
                        <Link to="/">Privacy</Link> &#8226;
                        <Link to="/">Advertising</Link> &#8226;
                        <Link to="/">Terms of use</Link> &#8226;
                        <Link to="/">More</Link>
                      </div>
                      <div>
                        <span> Qwicjobs © 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 border-start">
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
                  <Providers/> 
                  </div>
                </div>

                <div>
                  <Pagination/>
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
