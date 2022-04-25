import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const arrowRight = <FontAwesomeIcon icon={faArrowRight} />



const Steptwo = () => {
  return (
    <>
      <div className=''>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='mb-4'>

              <div>

              </div>

              <h6 className='fw-bold'>Upload Your Picture</h6>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dateofbirth"
                className="form-label"
              >
                Date Of Birth
              </label>
              <input
                type="email"
                className="form-control"
                id="dateofbirth"
                placeholder="MM/DD/YY"
              />
            </div>

            <div>
              <label
                htmlFor="firstname"
                className="form-label mb-0"
              >
                Educational Background
              </label>
              <p className='small text-muted'>You can select more than one</p>

              <div>
                <div className='row'>
                  <div className='col-6'>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="Primary" />
                      <label className="form-check-label" htmlFor="Primary">Primary</label>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="Senior" />
                      <label className="form-check-label" htmlFor="Senior">Senior High</label>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="Apprentice" />
                      <label className="form-check-label" htmlFor="Apprentice">Apprentice</label>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="Junior" />
                      <label className="form-check-label" htmlFor="Junior">Junior High</label>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="NVTI" />
                      <label className="form-check-label" htmlFor="NVTI">NVTI Training</label>
                    </div>
                    <div className="form-check mb-3">
                      <input type="checkbox" className="form-check-input" id="University" />
                      <label className="form-check-label" htmlFor="University">University</label>
                    </div>



                  </div>

                </div>
              </div>

            </div>


          </div>
          <div className='col-12 col-md-6'>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="health"
                  className="form-label"
                >
                  Any health condition?
                </label>
                <div className='d-flex'>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="h1" />
                    <label className="form-check-label" htmlFor="h1">Yes</label>
                  </div>
                  <div className="form-check ms-3">
                    <input type="radio" className="form-check-input" id="h2" />
                    <label className="form-check-label" htmlFor="h2">No</label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="yourself"
                  className="form-label"
                >
                  Tell us a bit about yourself
                </label>
                <textarea
                  type="email"
                  className="form-control"
                  id="yourself"
                  placeholder="Write few words to introduce yourself, what you do and your charges to enable people find you"
                  rows={7}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="yourself"
                  className="form-label"
                >
                  Add 3 other services you can offer (optional)
                </label>
                <div>
                  <ol className='other-services'>
                    <li><input type="text" /></li>
                    <li><input type="text" /></li>
                    <li><input type="text" /></li>
                  </ol>
                </div>
              </div>


            </div>

          </div>

        </div>

        <div className='mt-5 d-flex flex-column flex-md-row align-items-center  justify-content-between'>
          <div>
            <p className='mb-0' style={{ maxWidth: '357px' }}>
              By creating an account, you are consenting to our

              <Link to="/" className="text-success fw-bold ms-1">
                Privacy Policy & Terms of Use.
              </Link>

            </p>

          </div>


          <button className="btn btn-secondary rounded-pill text-nowrap mt-5 mt-md-0">
            Sign Up  {arrowRight}
          </button>



        </div>

      </div>

    </>
  )
}

export default Steptwo