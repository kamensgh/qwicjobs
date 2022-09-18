import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosRequest } from "../../../api/axios";
import { CSSTransitionGroup } from 'react-transition-group'
import ReactStars from "react-rating-stars-component";
import "./details.scss";
import Shimmer from "react-js-loading-shimmer";
import Moment from "moment";
const PROVIDERS_URL = "api/v1/users/service-providers";

const firstExample = {
  size: 18,
  value: 3.5,
  edit: false
};


const WorkerDetails = () => {
  const location = useParams();
  const [providerDetails, setProviderDetails] = useState({});
  const [loading, setloading] = useState(true);
  const [showmoreedu, setShowmoreedu] = useState(false);
  const [revealNumber, setRevealNumber] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    getproviderDetails();
    return () => controller.abort();
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
    let arr = providerDetails.ServiceProvider[0].ProviderEducation;
    let newed = arr.map((ed)=> 
          <p className="mb-0 bg-black text-center py-2 rounded" key={ed.id}>
            {ed.EducationalLevel.name}
          </p>
        )
    newed.shift()  
    return newed;
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
                          <h4 className="fw-bold">{providerDetails.firstName + " " + providerDetails.surname}</h4>
                          <p className="mb-1">{providerDetails.ServiceByProvider[0].Service.name} - {providerDetails.ServiceProvider[0].City.name}</p>
                          <ReactStars {...firstExample} />
                        </div>
                      </div>

                      <div>
                        {providerDetails.ServiceProvider[0].isAvailable ?
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

                              <p className="mb-0">{providerDetails.ServiceProvider[0].aboutSelf}</p>
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
                                  { Moment(providerDetails.BioId.dob).format("Do MMMM YYYY") }
                                </p>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="text-center">
                                <h6 className=" border-bottom border-2 border-success fw-bold d-inline-block mb-0">
                                  Skills
                                </h6>
                              </div>
                              <div className="p-3 p-md-4 border text-white rounded">
                                {providerDetails.ServiceByProvider.map((el) => (
                                    <p className="mb-2 bg-black text-center py-2 rounded">
                                      {el.Service.name}
                                    </p>
                                ))}
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
                                  {providerDetails.HealthCondition[0].hasHealthCondition ? "Has health condition" : "No known health condition" }
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
                                <div className="bg-black rounded pointer overflow-hidden">
                                  <p className="mb-0 bg-black text-center position-relative py-2 rounded" style={{ zIndex: 1}} id="ed" onMouseEnter={() => setShowmoreedu(true)} onMouseLeave={() => setShowmoreedu(false)}>
                                    {providerDetails.ServiceProvider[0].ProviderEducation[0].EducationalLevel.name}
                                  </p>
                                  <CSSTransitionGroup
                                    transitionName="slide"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}
                                  >
                                    {showmoreedu && 
                                      <div>
                                        {
                                          getEducation()}
                                    </div>
                                    }
                                  </CSSTransitionGroup>

                                </div>
                             
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="text-center">
                                <h6 className=" border-bottom border-2 border-warning fw-bold d-inline-block mb-0">
                                  Contact
                                </h6>
                              </div>
                              <div className="p-3 p-md-4 border text-white rounded">
                                {revealNumber ? <span className="text-dark text-center d-block">{providerDetails.phoneNumber} </span> :
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

              <div className="mt-3 mb-5">
                <div className="card shadow-none p-4">
                  <h5 className="fw-bold">Images from previous works</h5>
                  <div className="card-body border-top mt-2 p-4">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded object-fit-cover"
                          alt="..."
                          width={150}
                          height={220}
                        />
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded object-fit-cover"
                          alt="..."
                          width={150}
                          height={220}
                        />
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded object-fit-cover"
                          alt="..."
                          width={150}
                          height={220}
                        />
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded object-fit-cover"
                          alt="..."
                          width={150}
                          height={220}
                        />
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                          className="rounded object-fit-cover"
                          alt="..."
                          width={150}
                          height={220}
                        />
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
