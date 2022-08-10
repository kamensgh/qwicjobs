import React, { useEffect, useState } from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Row } from "react-bootstrap";
import Shimmer from "react-js-loading-shimmer";
import Moment from "moment";
import { axiosRequest } from "../../../api/axios";
import { useCookies } from "react-cookie";
const JOBS_URL = "api/v1/default/service";


const Profile = () => {
  const now = 60;
  const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const formatDate = Moment().format("dddd, MMMM Do");
  const baseURL = "https://qwicjobs-api.herokuapp.com";
  const [cookies] = useCookies(["user_login_cookies"]);
  const user_cookies = cookies.user_login_cookies;


  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    setloading(true);
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
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  const jobsPlaceholder = () => {
    const n = 20;
    return [...Array(n)].map((elem, index) => (
      <div className="mb-3" key={index}>
        <div className="d-flex">
          <div style={{ width: "30px" }}>
            <Shimmer height={"22px"} />
          </div>
          <div className="w-100 ms-3">
            <Shimmer height={"25px"} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="howitworks-banner">
        <div className="container h-100">
          <Row className="h-100 justify-content-between row overflow-hidden">
            <div className="col-12 col-md-6 col-xl-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h4 className="mb-3 fw-bold text-white">{formatDate}</h4>
                <h1
                  className="banner-text mb-0 display-5"
                  style={{ textTransform: "capitalize" }}
                >
                  Good Evening, <br />
                  {user_cookies.firstName}
                </h1>
              </div>
            </div>
            <div className="col-10 col-md-4 col-xl-3 d-md-block d-none">
              <div className="h-100 d-flex align-items-end">
                <img
                  src={`${process.env.PUBLIC_URL}/images/svg/worker-illustration.svg`}
                  alt="rate"
                  className="w-100"
                />
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 d-lg-block d-none">
              <div className="card h-auto p-4">
                {jobs
                  ? jobs.map((job) => (
                      <a
                        key={job.value}
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
            </div>
            <div className="col-12 col-md-7 col-lg-6">
              <div className="card h-auto mb-4">
                <div className="p-4 d-flex align-items-center border-bottom">
                  <div className="me-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/avatar3.png`}
                      alt="rate"
                      width={60}
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <h4 className="mb-0">Maxwell Agapong</h4>
                    <span className="small">Posted on 5th January 2022</span>
                  </div>
                </div>

                <div className="p-4  border-bottom">
                  <h4 className="text-truncate">
                    Stay in Nanny wanted for a Year Old
                  </h4>
                  <p className="small mb-0">
                    I need a God fearing elderly woman to help me with my 2
                    kids. I will be going to work and the person is needed to be
                    sending my kids to school and go for them and feed them for
                    me, I will do the washing myself. And also to babysit my
                    newborn.
                  </p>
                </div>
                <div className="p-4 py-3 d-flex  border-bottom">
                  <p className="mb-0 small me-2">
                    <span className="text-success">Salary Range:</span> Ghs200 -
                    Ghs500
                  </p>
                  <p className="mb-0 small">
                    <span className="text-success">Location:</span> Spintex
                    Accra
                  </p>
                </div>
                <div className="p-4 ">
                  <div className="d-flex justify-content-between">
                    <div>
                      <button className="btn mt-4 mt-md-0 rounded-pill">
                        Share
                      </button>
                    </div>
                    <div>
                      <Link
                        to="/jobdetails"
                        className="btn mt-4 mt-md-0 rounded-pill btn-info"
                      >
                        More details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-auto mb-4">
                <div className="p-4 d-flex align-items-center border-bottom">
                  <div className="me-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/avatar3.png`}
                      alt="rate"
                      width={60}
                    />
                  </div>
                  <div>
                    <h4 className="mb-0">Maxwell Agapong</h4>
                    <span className="small">Posted on 5th January 2022</span>
                  </div>
                </div>

                <div className="p-4  border-bottom">
                  <h4 className="text-truncate">
                    Stay in Nanny wanted for a Year Old
                  </h4>
                  <p className="small mb-0">
                    I need a God fearing elderly woman to help me with my 2
                    kids. I will be going to work and the person is needed to be
                    sending my kids to school and go for them and feed them for
                    me, I will do the washing myself. And also to babysit my
                    newborn.
                  </p>
                </div>
                <div className="p-4 py-3 d-flex  border-bottom">
                  <p className="mb-0 small me-2">
                    <span className="text-success">Salary Range:</span> Ghs200 -
                    Ghs500
                  </p>
                  <p className="mb-0 small">
                    <span className="text-success">Location:</span> Spintex
                    Accra
                  </p>
                </div>
                <div className="p-4 ">
                  <div className="d-flex justify-content-between">
                    <div>
                      <button className="btn mt-4 mt-md-0 rounded-pill">
                        Share
                      </button>
                    </div>
                    <div>
                      <button className="btn mt-4 mt-md-0 rounded-pill btn-info">
                        More details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3">
              <div className="card h-auto">
                <div className="p-4">
                  <div className="text-center mb-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/avatar3.png`}
                      alt="rate"
                      width={150}
                      className="rounded-circle"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="border-bottom border-info pb-2 text-info mb-3 d-block text-truncate">
                      Juliana Asantewaa
                    </h4>

                    <p className="">
                      Professional and Experienced Nanny based in Accra
                    </p>
                  </div>

                  <div className="text-center mb-3">
                    <p className="mb-1 small ">
                      <span className="text-success"> Date of Birth:</span>25th
                      June 2020
                    </p>
                    <p className="mb-1 small">
                      <span className="text-success">Location:</span> Spintex
                      Accra
                    </p>
                    <p className="mb-0 small">
                      <span className="text-success"> My Contact:</span> 0244
                      565 152{" "}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="mb-1 small fw-bold ">Profile completeness</p>

                    <div>
                      <ProgressBar now={now} label={`${now}%`} />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-secondary">
                  <h5 className="d-block text-white mb-3 text-center">
                    Featured Jobs
                  </h5>

                  <div>
                    <div>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/akosombo.png`}
                        alt="rate"
                        className="img-fluid img-fluid rounded"
                      />
                    </div>

                    <div className="bg-white p-2">
                      <h6 className="mb-0 text-center fw-bold">NANNY WANTED</h6>
                    </div>
                  </div>
                </div>

                <div className="text-center py-4">
                  <button className="btn mt-4 mt-md-0 rounded-pill btn-sm btn-info">
                    Post a Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
