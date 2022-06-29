import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { axiosRequest } from "../../api/axios";
const JOBS_URL = "api/v1/default/service";

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
const Stepone = ({ setPages, setFormData, formData }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [matchPwd, setMatchPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  const pwd = formData.user.password;
  const gender = formData.bio.genderId;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd, gender]);

  const getJobs = async () => {
    setloading(true);
    try {
      const response = await axiosRequest.get(JOBS_URL);
      const res = response.data.data;
      let newData = [];
      newData = res.map((job) => ({ value: job.id, label: job.name }));
      setJobs(newData);
      setloading(false);

      console.log(jobs);
    } catch (err) {
      console.log(err);
      setErrMsg("Error loading jobs");
      setloading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    console.log("gender", gender);

    const match = pwd === matchPwd;

    if (!match) {
      setErrMsg("Passwords do not match");
      errRef.current.focus();
      setloading(false);
    } else if (!gender) {
      setErrMsg("Please select a gender");
      errRef.current.focus();
      setloading(false);
    } else {
      setPages(2);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="firstname1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  ref={userRef}
                  id="firstname1"
                  placeholder="eg. Kwame"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: { ...formData.user, firstName: e.target.value },
                    })
                  }
                  value={formData.user.firstName}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  id="lastname"
                  placeholder="eg. Mensah"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: { ...formData.user, surname: e.target.value },
                    })
                  }
                  value={formData.user.surname}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="profession" className="form-label">
                  Profession
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="profession"
                  list="prof"
                  placeholder="eg. Nanny"
                  required
                />
                <datalist id="prof">
                  {jobs.map((item, key) => (
                    <option key={key} value={item.label} />
                  ))}
                </datalist>

                {/* 
                                {loading ?
                                    <select className='form-control' id="profession" disabled>
                                        <option >Loading jobs...</option>
                                    </select>
                                    :
                                    <Select options={jobs} placeholder={<div>Type to search</div>} required onChange={(e) => setFormData({ ...formData, services: e })} value={formData.services} />
                                } */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  className="form-control"
                  id="number"
                  placeholder="eg. 0244123456"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: { ...formData.user, phoneNumber: e.target.value },
                    })
                  }
                  value={formData.user.phoneNumber}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  id="email"
                  placeholder="eg. email@example.com"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: { ...formData.user, email: e.target.value },
                    })
                  }
                  value={formData.user.email}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  autoComplete="off"
                  className="form-control"
                  id="dob"
                  placeholder="eg. MM/DD/YY"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio: { ...formData.bio, dob: e.target.value },
                    })
                  }
                  value={formData.bio.dob}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="password"
                  placeholder="eg. email@example.com"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: { ...formData.user, password: e.target.value },
                    })
                  }
                  value={formData.user.password}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <label htmlFor="matchpassword" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="matchpassword"
                  placeholder="eg. Accra"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                />
              </div>
            </div>
          </div>

          <p
            className={`text-danger small mt-2  ${errMsg ? "error" : "d-none"}`}
            ref={errRef}
            arial-live="assertive"
          >
            {errMsg}
          </p>

          <div className="d-flex justify-content-between flex-column flex-md-row align-items-sm-end align-items-md-center mt-5">
            <div>
              <div className="">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <div
                  className="d-flex"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio: { ...formData.bio, genderId: e.target.value },
                    })
                  }
                >
                  <div className="form-check">
                    <input
                      type="radio"
                      name="gender"
                      className="form-check-input"
                      value={1}
                      id="male"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="form-check ms-3">
                    <input
                      type="radio"
                      name="gender"
                      className="form-check-input"
                      value={2}
                      id="female"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn mt-4 mt-md-0 rounded-pill btn-info">
              Next Step {arrowRight}
            </button>
          </div>

          <div className="mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div>
              <p className="mb-0">
                Already have an account?
                <Link to="/login" className="text-success fw-bold ms-1">
                  LOGIN
                </Link>
              </p>
            </div>

            <div>
              <Link to="/login" className="text-success fw-bold ms-1">
                AGENCY SIGNUP
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Stepone;
