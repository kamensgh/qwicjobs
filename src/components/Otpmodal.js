import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Logo from '../logo-white.svg';
import { Link } from 'react-router-dom';


const Otpmodal = ({show, onHide }) => {
  return (
    <>
        <Modal show={show} backdrop="static" keyboard={false} centered >
            <div className="text-center mb-4 pb-2">
                <img src={Logo} alt="logo" width={190} />
            </div>

            <div className='bg-white'  style={{ borderRadius: '20px' }}>
                <div className="modal-header pt-5 px-5 border-0">
                    <h6 className="modal-title fw-bold" id="staticBackdropLabel">Check your phone for an OTP code</h6>
                </div>
                <div className="modal-body px-5" >
                <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                             Enter Code
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="4453"
                            />
                          </div>
                </div>
                <div className="modal-footer pb-5 px-5 border-0">
                    {/* <button type="button" className="btn btn-secondary w-100" onClick={onHide} data-bs-dismiss="modal">Let’s go</button> */}
                    <Link to="/profile" className="btn btn-secondary w-100">
                            SIGNUP
                          </Link>
                </div>
            </div>
            
        </Modal>
    </>
  )
}

export default Otpmodal