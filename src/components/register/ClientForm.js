import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosRequest } from "../../api/axios";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { registerStart, registerSuccess, registerFailure } from "../../redux/userRedux";
import { useCookies } from "react-cookie";
const REGISTER_URL = "api/v1/auth/register/client";


function ClientForm() {
  const name = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [terms, setTerms] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user-cookie"]);
  const dispatch = useDispatch();

  useEffect(() => {
    name.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const isChecked = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      setTerms(false);
      setErrMsg("");
      console.log(terms);
    } else {
      setTerms(true);
      setErrMsg("");
      console.log(terms);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      user: {
        firstName: firstName,
        surname: lastName,
        otherNames: "",
        email: email,
        password: pwd,
        phoneNumber: number,
        userTypeId: 5,
      },
    };

    const match = pwd === matchPwd;

    if (!match) {
      setErrMsg("Passwords do not match");
      setLoading(false);
    } else if (!terms) {
      setErrMsg("Please accept our terms and conditions");
      setLoading(false);
    } else {
      try {
        dispatch(registerStart());
        const res = await axiosRequest.post(REGISTER_URL, data);

        console.log(res);
        if (res.data.data.id) {
          console.log(" data .length", res.data.data);
          let expiry_date = new Date(Date.now() + 86400 * 1000);
          dispatch(registerSuccess(res.data.data));
          setCookie("user_login_cookies", res.data.data, {
            path: "/",
            expires: expiry_date,
          }); 
          console.log(expiry_date);
          navigate("/userprofile", { replace: true });
          setLoading(false);
        } else {
          console.log("is it?", res.data.data.length);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.response);
        dispatch(registerFailure());
        setLoading(false);
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err?.response.status === 400) {
          setErrMsg("Missing phone number or password");
        } else if (err?.response.status === 401) {
          setErrMsg("Unauthorised");
        } else if (err?.response.status === 500) {
          setErrMsg("Phone number or email already exist");
        } else {
          setErrMsg("Registration failed, please try again");
        }
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              ref={name}
              autoComplete="off"
              className="form-control"
              id="firstname"
              placeholder="eg. Kwame"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="surname"
              placeholder="eg. Mensah"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Contact Number
            </label>
            <input
              type="number"
              autoComplete="off"
              className="form-control"
              id="number"
              placeholder="eg. 0244123456"
              aria-describedby="confirmnumber"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              className="form-control"
              id="email"
              placeholder="eg. example@email.com"
              aria-describedby="confirmnumber"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Enter Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passreset" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              id="passreset"
              value={matchPwd}
              onChange={(e) => setMatchPwd(e.target.value)}
              placeholder="Re-enter Password"
              required
            />
          </div>

          <p
            className={`text-danger small mt-2  ${errMsg ? "error" : "d-none"}`}
            ref={errRef}
            arial-live="assertive"
          >
            {errMsg}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsandconditions"
                  onClick={(e) => {
                    isChecked(e);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="termsandconditions"
                >
                  I Accept All T&C’s
                </label>
              </div>
            </div>

            {loading ? (
              <button className="btn btn-secondary disabled">
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
              <button className="btn btn-secondary">SIGN UP</button>
            )}
          </div>

          <div className="mt-5">
            <Link to="/password" className="">
              Password Reset
            </Link>
            <span className="px-3">|</span>
            <Link to="/login" className="text-orange fw-bold">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default ClientForm;
