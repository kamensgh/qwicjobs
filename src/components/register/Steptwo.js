import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faC } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { axiosRequest } from "../../api/axios";

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
const REGISTER_URL = "api/v1/auth/register/provider";

const Steptwo = ({ setFormData, formData }) => {
  const navigate = useNavigate();
  const errRef = useRef();
  const [imageurl, setimageurl] = useState(
    `${process.env.PUBLIC_URL}/images/avatar2.png`
  );
  const [loading, setLoading] = useState(false);
  const [selectEd, setSelectEd] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  console.log(formData);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setimageurl(reader.result);
        setFormData({
          ...formData,
          bio: { ...formData.bio, profilePicture: reader.result },
        });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getEd = (e) => {
    const { checked, value } = e.currentTarget;
    setSelectEd((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData);

    // try {
    //   const response = await axiosRequest.post(REGISTER_URL, JSON.stringify({
    //     formData
    //   },
    //     {
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Credentials': 'true'
    //       }
    //     }
    //   ))
    //   console.log(JSON.stringify(response?.data));
    //   setLoading(false);
    //   navigate('/userprofile', { replace: true });

    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    //   if (!err?.response) {
    //     setErrMsg('No Server Response')
    //   } else if (err?.response.status === 400) {
    //     setErrMsg('Missing phone number or password')
    //   } else if (!err?.response.status === 401) {
    //     setErrMsg('Unauthorised')
    //   } else {
    //     setErrMsg('Registration failed')
    //   }
    // }
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
                        <input type="text" />
                      </li>
                      <li>
                        <input type="text" />
                      </li>
                      <li>
                        <input type="text" />
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

            {loading ? (
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
