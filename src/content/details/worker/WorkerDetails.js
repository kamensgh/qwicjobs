import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./details.scss";

const WorkerDetails = () => {
  return (
    <>
      <div className="banner">
        <img
          src={`${process.env.PUBLIC_URL} /images/worker-bg.jpg`}
          alt="banner"
          className=""
        />
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10">
              <div>
                <div className="bg-white px-2 px-md-3 px-lg-5 pt-lg-5 pt-4">
                  <div className="d-flex justify-content-between flex-column flex-md-row align-items-center">
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src={`${process.env.PUBLIC_URL} /images/avatar3.png`}
                          alt="banner"
                          className="rounded-circle border"
                        />
                      </div>
                      <div className="ms-3">
                        <h4 className="fw-bold">Mercy Asare-Gyawu</h4>
                        <p className="mb-1">Nanny - Accra</p>
                        <p className="mb-0">45</p>
                      </div>
                    </div>

                    <div>
                      <h6 className="text-success fw-bold">
                        Available for Work
                      </h6>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="mb-5 mb-lg-0">
                          <div className="text-center">
                            <h6 className=" border-bottom border-2 border-info fw-bold d-inline-block mb-0">
                              About
                            </h6>
                          </div>
                          <div className="p-3 p-md-4 bg-primary text-white rounded">
                            <p >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. 
                            </p>
                            <p className="mb-0">It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="mb-5 mb-lg-0">
                          <div className="mb-3">
                            <div className="text-center">
                              <h6 className=" border-bottom border-2 border-success fw-bold d-inline-block mb-0">
                                Date of Birth
                              </h6>
                            </div>
                            <div className="p-3 p-md-4 border text-white rounded">
                              <p className="mb-0 bg-black text-center py-2 rounded">
                                20th January 1990
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="text-center">
                              <h6 className=" border-bottom border-2 border-success fw-bold d-inline-block mb-0">
                                Core Skills
                              </h6>
                            </div>
                            <div className="p-3 p-md-4 border text-white rounded">
                              <p className="mb-0 bg-black text-center py-2 rounded">
                                Mechanic
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="mb-5 mb-lg-0">
                          <div className="mb-3">
                            <div className="text-center">
                              <h6 className=" border-bottom border-2 border-warning fw-bold d-inline-block mb-0">
                                Health Condition
                              </h6>
                            </div>
                            <div className="p-3 p-md-4 border text-white rounded">
                              <p className="mb-0 bg-black text-center py-2 rounded">
                                No known health condition
                              </p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="text-center">
                              <h6 className=" border-bottom border-2 border-warning fw-bold d-inline-block mb-0">
                                Education
                              </h6>
                            </div>
                            <div className="p-3 p-md-4 border text-white rounded">
                              <p className="mb-0 bg-black text-center py-2 rounded">
                                Junior High School Graduate
                              </p>
                            </div>
                          </div>
                           <div className="mb-3">
                            <div className="text-center">
                              <h6 className=" border-bottom border-2 border-warning fw-bold d-inline-block mb-0">
                                Contact
                              </h6>
                            </div>
                            <div className="p-3 p-md-4 border text-white rounded">
                              <button className="btn btn-secondary rounded w-100">
                               View Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerDetails;
