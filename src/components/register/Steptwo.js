import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faC } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { axiosRequest } from "../../api/axios";
import { registerStart, registerSuccess, registerFailure } from "../../redux/userRedux";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
const JOBS_URL = "api/v1/default/service";


const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
const REGISTER_URL = "api/v1/auth/register/provider";

const Steptwo = ({ setFormData, formData }) => {
  const navigate = useNavigate();
  const errRef = useRef();
  const [imageurl, setimageurl] = useState(
    `${process.env.PUBLIC_URL}/images/avatar2.png`
  );
  const [loading, setLoading] = useState(false);
  const [submitloader, setSubmitLoader] = useState(false);
  const [cookies, setCookie] = useCookies(["user-cookie"]);


  const [selectEd, setSelectEd] = useState([]);
  const [selectOtherJobs, setSelectOtherJobs] = useState([]);

  const [errMsg, setErrMsg] = useState("");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();



  
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setimageurl(reader.result);
        setFormData({
          ...formData,
          bio: { ...formData.bio, profilePicture: e.target.files[0].name },
        });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getEd = (e) => {
    const { checked, value } = e.currentTarget;
    setSelectEd((prev) =>
      checked ? [...prev, parseInt(value)] : prev.filter((val) => val !== parseInt(value))
    );

    setFormData({
      ...formData,
      provider: {
        ...formData.provider,
        educationalLevelId: selectEd,
      },
    })
  };

  const setOtherJobs = (e) => {
    let value = e.target.value

    setSelectOtherJobs((prev) =>
      value ? [...prev, parseInt(value)] : prev.filter((val) => val !== parseInt(value))
    );

    setFormData({
      ...formData,
      services: selectOtherJobs
    })
  }

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await axiosRequest.get(JOBS_URL);
      const res = response.data.data;
      let newData = [];
      newData = res.map((job) => ({ value: job.id, label: job.name }));
      setJobs(newData);
    } catch (err) {
      console.log(err);
      setErrMsg("Error loading jobs");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoader(true);

    console.log(formData);
    dispatch(registerStart());
    try {
      const res = await axiosRequest.post(REGISTER_URL, formData,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      console.log("data", res);

      if (res.data.data.id) {
        console.log("data", res.data.data);
        let expiry_date = new Date(Date.now() + 86400 * 1000);
        dispatch(registerSuccess(res.data.data));
        setCookie("user_login_cookies", res.data.data.user, {
          path: "/",
          expires: expiry_date,
        });
        console.log(expiry_date);
        navigate("/workerprofile", { replace: true });
        setSubmitLoader(false);
      } else {
        console.log("is it?", res.data.data.length);
        setSubmitLoader(false);
      }
      return;

    } catch (err) {
      console.log(err);
      dispatch(registerFailure());
      setSubmitLoader(false);
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err?.response.status === 400) {
        setErrMsg('Missing phone number or password')
      } else if (!err?.response.status === 401) {
        setErrMsg('Unauthorised')
      } else {
        setErrMsg('Registration failed')
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <div className="">
                  <label
                    htmlFor="photo-upload"
                    className="custom-file-upload mb-4"
                  >
                    <div className="img-wrap img-upload pointer">
                      <img htmlFor="photo-upload" src={imageurl} />
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      onChange={onChangePicture}
                    />
                  </label>
                </div>

                <h6 className="fw-bold">Upload Your Picture</h6>
              </div>

              <div>
                <label htmlFor="firstname" className="form-label mb-0">
                  Educational Background
                </label>
                <p className="small text-muted">You can select more than one</p>

                <div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={1}
                          id="Primary"
                        />
                        <label className="form-check-label" htmlFor="Primary">
                          Primary
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={3}
                          id="Senior"
                        />
                        <label className="form-check-label" htmlFor="Senior">
                          Senior High
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={4}
                          id="Apprentice"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Apprentice"
                        >
                          Apprentice
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={2}
                          id="Junior"
                        />
                        <label className="form-check-label" htmlFor="Junior">
                          Junior High
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={5}
                          id="NVTI"
                        />
                        <label className="form-check-label" htmlFor="NVTI">
                          NVTI Training
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          onChange={getEd}
                          className="form-check-input"
                          value={6}
                          id="University"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="University"
                        >
                          University
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <div className="mb-4">
                  <label htmlFor="health" className="form-label">
                    Any health condition?
                  </label>
                  <div
                    className="d-flex"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasHealthCondition: e.target.value,
                      })
                    }
                  >
                    <div className="form-check">
                      <input
                        type="radio"
                        name="condition"
                        className="form-check-input"
                        id="h1"
                        value={true}
                      />
                      <label className="form-check-label" htmlFor="h1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        type="radio"
                        name="condition"
                        className="form-check-input"
                        id="h2"
                        value={false}
                      />
                      <label className="form-check-label" htmlFor="h2">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="yourself" className="form-label">
                    Tell us a bit about yourself
                  </label>
                  <textarea
                    type="email"
                    className="form-control"
                    id="yourself"
                    placeholder="Write few words to introduce yourself, what you do and your charges to enable people find you"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        provider: {
                          ...formData.provider,
                          aboutSelf: e.target.value,
                        },
                      })
                    }
                    value={formData.provider.aboutSelf}
                    rows={7}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="yourself" className="form-label">
                    Add 3 other services you can offer (optional)
                  </label>
                  <div>
                    <ol className="other-services">
                      <li>
                        {loading ?
                          <select id="profession" disabled>
                            <option >Loading jobs...</option>
                          </select>
                          :
                          <select id="profession" onChange={setOtherJobs} >
                            <option value={0}>Select other service  </option>
                            {jobs.map((item, key) => (
                              <option key={key} value={item.value}> {item.label} </option>
                            ))}
                          </select>
                        }
                      </li>
                      <li>
                        {loading ?
                          <select  id="profession" disabled>
                            <option >Loading jobs...</option>
                          </select>
                          :
                          <select id="profession" onChange={setOtherJobs} >
                            <option value={0}>Select other service</option>
                            {jobs.map((item, key) => (
                              <option key={key} value={item.value}> {item.label} </option>
                            ))}
                          </select>
                        }
                      </li>
                      <li>
                        {loading ?
                          <select id="profession" disabled>
                            <option >Loading jobs...</option>
                          </select>
                          :
                          <select id="profession" onChange={setOtherJobs} >
                            <option value={0}>Select other service</option>
                            {jobs.map((item, key) => (
                              <option key={key} value={item.value}> {item.label} </option>
                            ))}
                          </select>
                        }
                      </li>
                    </ol>
                  </div>
                </div>
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

          <div className="mt-5 d-flex flex-column flex-md-row align-items-center  justify-content-between">
            <div>
              <p className="mb-0" style={{ maxWidth: "357px" }}>
                By creating an account, you are consenting to our
                <Link to="/" className="text-success fw-bold ms-1">
                  Privacy Policy & Terms of Use.
                </Link>
              </p>
            </div>

            {submitloader ? (
              <button className="btn btn-secondary rounded-pill text-nowrap mt-5 mt-md-0 disabled">
                Loading...
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                className="btn btn-secondary rounded-pill text-nowrap mt-5 mt-md-0"
                onClick={handleSubmit}
              >
                Sign Up {arrowRight}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Steptwo;
