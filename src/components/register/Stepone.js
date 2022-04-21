import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
const Stepone = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [number, setNumber] = useState('');
    const [validNumber, setValidNumber] = useState(false);
    const [numberFocus, setNumberFocus] = useState(false);

    const [profession, setProfession] = useState('');
    const [validProfession, setValidProfession] = useState(false);
    const [professionFocus, setProfessionFocus] = useState(false);

    const [city, setCity] = useState('');
    const [validCity, setValidCity] = useState(false);
    const [cityFocus, setCityFocus] = useState(false);

    const [gender, setGender] = useState('');
    const [validGender, setValidGender] = useState(false);
    const [genderFocus, setGenderFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
    //  userRef.current.focus();
    }, [])
    


  

    return (
        <>
            <div className=''>
                <div className='row mb-4'>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="firstname"
                                className="form-label"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                id="firstname"
                                placeholder="eg. Kwame"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. Mensah"
                            />
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Profession
                            </label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. Nanny"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. 0244123456"
                            />
                        </div>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. email@example.com"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Date Of Birth
                            </label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. MM/DD/YY"
                            />
                        </div>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. email@example.com"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Repeat Password
                            </label>
                            <input
                                type="password"
                                autoComplete='off'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="eg. Accra"
                            />
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column flex-md-row align-items-sm-end align-items-md-center mt-5'>
                    <div>
                        <div className="">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Gender
                            </label>
                            <div className='d-flex'>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Male</label>
                                </div>

                                <div className="form-check ms-3">
                                    <input type="radio" className="form-check-input" id="exampleCheck12" />
                                    <label className="form-check-label" for="exampleCheck12">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn mt-4 mt-md-0 rounded-pill btn-info">
                        Next Step {arrowRight}
                    </button>
                </div>

                <div className='mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between'>
                    <div>
                        <p className='mb-0'>
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
        </>
    )
}

export default Stepone