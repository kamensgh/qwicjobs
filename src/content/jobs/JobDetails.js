import React from "react";
import "./jobs.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Row } from "react-bootstrap";

const JobDetails = () => {
  return (
    <>
      <div className="jobdetails-banner py-5 py-md-0">
        <div className="container h-100">
          <Row className="h-100 justify-content-between align-items-center row overflow-hidden">
            <div className="col-12 col-md-8 col-xl-7">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h1 className="banner-text mb-3 display-5">
                  Excellent Domestic Help
                </h1>
                <h4 className="mb-0 text-white">
                  Nannies, domestic helpers, Cooks, Gardeners, Cleaners Home
                  tutors, among others. Get all the help you need
                </h4>
              </div>
            </div>
            <div className="col-10 col-md-4 col-xl-2 d-md-block d-none">
              <div className="h-100 d-flex align-items-end">
                <img
                  src={`${process.env.PUBLIC_URL}/images/young-african-american.png`}
                  alt="rate"
                  className="w-100 mt-4"
                />
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div className="bg-light pt-5 pb-5">
        <div className="container">
          <div>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Job Details">
                  <div className="bg-white">
                      <div className="row g-0">
                        <div className="col-12 col-md-4">
                          <div className="">
                            <div className="bg-light py-3">
                              <h5 className="mb-0 text-center">Child Care</h5>
                            </div>
                            <div className="bg-white p-4">
                              <h5 className="fw-bold mb-3">
                                A reputable home needs a stay in Nanny to support with
                                child care
                              </h5>
      
                              <div>
                                <div className="mb-2">Location: Accra</div>
                                <div className="mb-2">Job type: Full time</div>
                                <div className="mb-2">Job Role: Domestic help</div>
                                <div>Salary: Ghs1,000</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 border-start border-end">
                          <div className="">
                            <div className="bg-light py-3">
                              <h5 className="mb-0 text-center">Job Summary</h5>
                            </div>
                            <div className="bg-white p-4">
                              <h5 className="fw-bold mb-3">
                                Perform the duties of a stay in Nanny
                              </h5>
                              <div>
                                <div className="mb-2">Minimum Qualification: JHS</div>
                                <div className="mb-2">Experience Level: Beginner</div>
                                <div className="mb-2">
                                  Experience Length: 4 Months
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="">
                            <div className="bg-light py-3">
                              <h5 className="mb-0 text-center">Job Description</h5>
                            </div>
                            <div className="bg-white p-4">
                              <h5 className="fw-bold mb-3">Responsibilities:</h5>
      
                              <div>
                                <ul>
                                  <li>
                                    Clean, stock and supply designated facility areas.
                                  </li>
                                  <li> Dusting, sweeping, vacuuming and mopping</li>
                                  <li>
                                    Carry out deep cleaning and detailed cleaning task
                                  </li>
                                  <li>
                                    Notify management of deficiencies or repairs
                                    required
                                  </li>
                                  <li>
                                    Stock and maintain supply rooms Cleaning and
                                    Laundry
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </Tab>
              <Tab eventKey="profile" title="Jobs like this">
                <div>second</div>
              </Tab>
            </Tabs>
          </div>
          <div className="mt-5 text-end">
              <button className="btn">Share Job</button>

                <button className="btn btn-secondary rounded-pill">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
