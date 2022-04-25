import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';


const PWD_REGEX = /^[a-zA-Z0-9_.]+$/;
const NUMBER_REGEX = /^\d{10}$/;


function ClientForm() {
    const name = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [number, setNumber] = useState('');
    const [validNumber, setValidNumber] = useState(false);
    const [numberFocus, setNumberFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validmatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        name.current.focus();
    }, [])

    useEffect(() => {
        const results = firstName.length > 2;
        setValidFirstName(results);
    }, [firstName])

    useEffect(() => {
        const results = lastName.length > 2;
        setValidLastName(results);
    }, [lastName])



    useEffect(() => {
        const results = NUMBER_REGEX.test(number)
        setValidNumber(results);
    }, [number])

    useEffect(() => {
        const results = PWD_REGEX.test(pwd)
        setValidPwd(results);
        console.log(results);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);


    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [firstName, lastName, number, pwd, matchPwd])



    const handleSubmit = () => {

    }


    return (
        <>
            <form className='' onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div className="mb-3">
                        <label
                            htmlFor="firstname"
                            className="form-label"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            ref={name}
                            autoComplete='off'
                            className="form-control"
                            id="firstname"
                            placeholder="eg. Kwame"
                            aria-invalid={validFirstName ? "false" : "true"}
                            onChange={(e) => setFirstName(e.target.value)}
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="surname"
                            className="form-label"
                        >
                            Surname
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            className="form-control"
                            id="surname"
                            placeholder="eg. Mensah"
                            aria-invalid={validLastName ? "false" : "true"}
                            onChange={(e) => setLastName(e.target.value)}
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="number"
                            className="form-label"
                        >
                            Contact Number
                        </label>
                        <input
                            type="email"
                            autoComplete='off'
                            className="form-control"
                            id="number"
                            placeholder="eg. 0244123456"
                            aria-invalid={validNumber ? "false" : "true"}
                            onChange={(e) => setNumber(e.target.value)}
                            onFocus={() => setNumberFocus(true)}
                            onBlur={() => setNumberFocus(false)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="pass"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="pass"
                            placeholder="Enter Password"
                            aria-invalid={validPwd ? "false" : "true"}
                            onChange={(e) => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            aria-describedby="password"
                            required
                        />
                        <p id='password' className={`text-danger small mt-2 ${validmatchPwd ? "info" : "d-none"}`}>Must match the first passworn input</p>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="passreset"
                            className="form-label"
                        >
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            autoComplete='off'
                            className="form-control"
                            id="passreset"
                            aria-invalid={validmatchPwd ? "false" : "true"}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            onFocus={() => setMatchPwdFocus(true)}
                            onBlur={() => setMatchPwdFocus(false)}
                            aria-describedby="confirmpassword"
                            placeholder="Re-enter Password"
                        />
                        <p id='confirmpassword' className={`text-danger small mt-2 ${matchPwdFocus && !validmatchPwd ? "info" : "d-none"}`}>Must match the first password input</p>
                    </div>

                    <p className={errMsg ? "error" : "offscreen"} ref={errRef} arial-live="assertive">{errMsg}</p>


                    <div className='d-flex justify-content-between align-items-center mt-5'>
                        <div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I Accept All T&C’s</label>
                            </div>
                        </div>

                        <button className="btn btn-secondary" disabled={!validFirstName || !validLastName || !validNumber || !validPwd || !validmatchPwd ? true : false}>
                            SIGN UP
                        </button>
                    </div>

                    <div className='mt-5'>
                        <Link to="/password" className="">
                            Password Reset
                        </Link>
                        <span className='px-3'>|</span>
                        <Link to="/login" className="text-orange fw-bold">
                            Login
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ClientForm