import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosRequest } from "../../../api/axios";
import "./details.scss";
import Shimmer from "react-js-loading-shimmer";
import Moment from "moment";
const PROVIDERS_URL = "api/v1/users/service-providers";


const WorkerDetails = () => {
  const location = useParams();
  const [providerDetails, setProviderDetails] = useState([]);
  const [loading, setloading] = useState(true);
  const [revealNumber, setRevealNumber] = useState(false)

  useEffect(() => {
    getproviderDetails();
  }, []);

  const getproviderDetails = async () => {
    setloading(true);
    try {
      const response = await axiosRequest.get(PROVIDERS_URL + "/" + location.id);
      const res = response.data.data;
      console.log(res);
      setProviderDetails(res);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(true);
    }
  }

  const getEducation = () => { 
    let arr = providerDetails.ProviderEducation;

    console.log(arr);
    let last = arr[arr.length - 1];
    switch (last.educationalLevelId) {
      case 1:
        return "PHD";
      case 2:
        return "Masters";
      case 3:
        return "Bachelor's Degree";
      case 4:
        return "Senior High School";
      case 5:
        return "Junior High School";
      case 6:
        return "Primary School";
      case 7:
        return "No Education";
      default:
        return "No Education";
    }

   }

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
                {!loading ?
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
                          <h4 className="fw-bold">{providerDetails.User.firstName + " " + providerDetails.User.surname}</h4>
                          <p className="mb-1">Nanny - {providerDetails.City.name ? providerDetails.City.name : ""}</p>
                          <p className="mb-0">{providerDetails.User.surname}</p>
                        </div>
                      </div>

                      <div>
                        {providerDetails.isAvailable ?
                          <h6 className="text-success fw-bold">
                            Available for Work
                          </h6> :
                          <h6 className="text-danger fw-bold">
                            Not Available for Work
                          </h6>}

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

                              <p className="mb-0">{providerDetails.aboutSelf ? providerDetails.aboutSelf : " "}</p>
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
                                  {
                                  
                                    Moment(providerDetails.User.BioId.dob).format("Do MMMM YYYY") }
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
                                 {getEducation()}
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
                                {revealNumber ? <span className="text-dark text-center d-block">{providerDetails.User.phoneNumber} </span> :
                                  <button className="btn btn-secondary rounded w-100" onClick={(e) => setRevealNumber(true)}>
                                    View Contact
                                  </button>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div className="bg-white px-2 px-md-3 px-lg-5 pt-lg-5 pt-4">
                    <div className="row mb-4">
                      <div className="col-12 col-md-4">
                        <Shimmer height={52} />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                      <div className="col-12 col-md-4">
                        <Shimmer height={"52px"} />
                      </div>
                    </div>

                  </div>
                }
              </div>

              <div className="mt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                  <div className="col mb-4">
                    <div className="card shadow-none" >
                      <div className="p-3 d-flex align-items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded-circle"
                          alt="..."
                          width={60}
                          height={60}  
                        />
                        <div className="ms-3">
                          <h6 className="fw-bold mb-1">Roland S. Owusu</h6> 
                          <p className="mb-0 small text-muted">Jan 26, 2022</p>
                        </div>

                      </div>
                      <div className="card-body border-top p-3">
                        <div>
                          <h6 className="card-title text-orange fw-bold mb-2">
                            Cleaning and Washing
                          </h6>
                          <p className="">3.0</p>
                        </div>
                        <p className="card-text small mt-3">
                          “Finished the job EXTREMELY quickly and his work was perfect. Great communication also. Very happy!
                        </p>
                    
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card shadow-none" >
                      <div className="p-3 d-flex align-items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded-circle"
                          alt="..."
                          width={60}
                          height={60}
                        />
                        <div className="ms-3">
                          <h6 className="fw-bold mb-1">Roland S. Owusu</h6>
                          <p className="mb-0 small text-muted">Jan 26, 2022</p>
                        </div>

                      </div>
                      <div className="card-body border-top p-3">
                        <div>
                          <h6 className="card-title text-orange fw-bold mb-2">
                            Cleaning and Washing
                          </h6>
                          <p className="">3.0</p>
                        </div>
                        <p className="card-text small mt-3">
                          “Finished the job EXTREMELY quickly and his work was perfect. Great communication also. Very happy!
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card shadow-none" >
                      <div className="p-3 d-flex align-items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded-circle"
                          alt="..."
                          width={60}
                          height={60}
                        />
                        <div className="ms-3">
                          <h6 className="fw-bold mb-1">Roland S. Owusu</h6>
                          <p className="mb-0 small text-muted">Jan 26, 2022</p>
                        </div>

                      </div>
                      <div className="card-body border-top p-3">
                        <div>
                          <h6 className="card-title text-orange fw-bold mb-2">
                            Cleaning and Washing
                          </h6>
                          <p className="">3.0</p>
                        </div>
                        <p className="card-text small mt-3">
                          “Finished the job EXTREMELY quickly and his work was perfect. Great communication also. Very happy!
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

   
    </>
  );
};

export default WorkerDetails;
