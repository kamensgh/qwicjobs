import React, { useEffect, useRef, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider'
const LOGIN_URL = 'api/v1/auth/login';

const LoginForm = () => {
    const { setuserInfo } = useStateContext();
    const numberRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [number, setNumber] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        numberRef.current.focus();
        localStorage.removeItem("userinfo");
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [number, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(number, pwd);
            const response = await axios.post(LOGIN_URL, JSON.stringify({ 
                "phoneNumber": number,
                "password": pwd
            },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': 'true'
                    }
                }
            ))
            localStorage.removeItem("userinfo");
            localStorage.setItem("userinfo", JSON.stringify(response?.data)); 
            setuserInfo(response?.data)
            setNumber('')
            setPwd('')
            setLoading(false);

            navigate('/userprofile', { replace: true });

        } catch (err) {
            console.log(err);
            setLoading(false);
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err?.response.status === 400) {
                setErrMsg('Missing phone number or password')
            } else if (!err?.response.status === 401) {
                setErrMsg('Unauthorised')
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }
    }






    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div className="mb-3">
                        <label
                            htmlFor="number"
                            className="form-label"
                        >
                            Enter Phone Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            autoComplete='off'
                            ref={numberRef}
                            id="number"
                            placeholder="0244123456"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="form-label"
                        >
                            Enter Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>

                    <p className={errMsg ? "error" : "offscreen"} ref={errRef} arial-live="assertive">{errMsg}</p>

                    {loading ?
                        <button className="btn btn-secondary mt-3 disabled w-100">
                            Loading...
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        </button> :
                        <button className="btn btn-secondary mt-3 w-100">
                            LOGIN
                        </button>}

                </div>
            </form>
        </>
    )
}

export default LoginForm