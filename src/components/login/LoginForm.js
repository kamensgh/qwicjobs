import React, { useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { axiosRequest } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../redux/userRedux";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["user-cookie"]);
  const numberRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      dispatch(loginStart());
      const res = await axiosRequest.post(
        "https://qwicjobs-api.herokuapp.com/api/v1/auth/login",
        {
          phoneNumber: number,
          password: pwd,
        }
      );
      if (Object.keys(res.data.data).length > 0) {   
        console.log("data.length", res.data.data);
        let expiry_date = new Date(Date.now() + 86400 * 1000);
        dispatch(loginSuccess(res.data.data.user));
        setCookie("user_login_cookies", res.data.data.user, {
          path: "/",
          expires: expiry_date,
        });
        setLoading(false);
        if (res.data.data.user.UserType.id === 4){
          console.log("worker");
          navigate("/workerprofile", { replace: true }); 
        } else {
          console.log("user");
          navigate("/userprofile", { replace: true }); 
        }
      } else {   
        setErrMsg(res.data.message);
        setLoading(false);
      } 
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        setErrMsg("User not found");
      } else {
        setErrMsg("Something went wrong, please try again");
      }
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Enter Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              ref={numberRef}
              placeholder="0244123456"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>

          <p
            className={errMsg ? "error mb-0 text-danger small" : "offscreen"}
            ref={errRef}
            arial-live="assertive"
          >
            {errMsg}
          </p>

          {loading ? (
            <button className="btn btn-secondary mt-3 disabled w-100">
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
            <button type="submit" className="btn btn-secondary mt-3 w-100">
              LOGIN
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
