import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import EditEducationModal from "../../../components/modals/EditEducationModal"
import EditVerificationModal from "../../../components/modals/EditVerificationModal"
import ImageUploading from 'react-images-uploading';

import { Skills, Languages } from '../../../data'

const Editprofile = () => {
  const editSection = <FontAwesomeIcon icon={faPencil} className='text-muted' style={{ fontSize: '13px' }} />;
  const alteditSection = <FontAwesomeIcon icon={faPencil} style={{ fontSize: '11px' }} />;
  const addSection = <FontAwesomeIcon icon={faPlus} className='text-muted' style={{ fontSize: '13px' }} />;
  const deleteSection = <FontAwesomeIcon icon={faTrashCan} style={{ fontSize: '11px' }} />;

  const [educationmodalShow, setEducationmodalShow] = useState(false);
  const [verificationmodalShow, setVerificationmodalShow] = useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  const now = 60;
  const firstExample = {
    size: 18,
    value: 3.5,
    edit: false
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };



  return (
    <div>
      <div className="bg-light py-4 gradient-bg">
        <div className="container">
          <div className='card h-auto mb-4'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className=' d-flex flex-grow-1 p-4 '>
                <div className='d-flex flex-grow-1 align-items-center flex-column flex-md-row'>
                  <div>
                    <span className="d-inline-block position-relative rounded-circle">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/avatar3.png`}
                        alt="rate"
                        width={100}
                        height={100}
                        className="rounded-circle object-fit-cover"
                      />
                    </span>
                  </div>
                  <div className='ms-0 ms-md-3 mt-3 mt-md-0 w-100'>
                    <div className='d-flex justify-content-between flex-column flex-xl-row'>
                      <div>
                        <div className='d-flex me-0 me-xl-5'>
                          <h4 className="fw-bold text-truncate-1 mb-0">Juliana Asentewaa</h4>
                          <span className="editinfo">{editSection}</span>

                        </div>
                        <p className="small mb-2">Accra, Ghana</p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <label className="m-0 switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                          </label>
                          <span className="small ms-2 text-nowrap">Available for work</span>
                        </div>
                      </div>
                    </div>





                    <div className="d-flex align-items-center">
                      <span className='small text-muted text-muted me-2'>Your rating:</span>

                      <ReactStars {...firstExample} />
                    </div>
                  </div>
                </div>

              </div>
              <div className='border-start flex-sm-grow-1 flex-xl-grow-0 overflow-auto'>
                <div className='p-4 border-bottom d-flex align-items-center justify-content-between'>

                  <a className="btn mt-4 mt-md-0 rounded-pill btn-sm px-4 btn-info" href="/">View your Profile</a>
                  <button className="btn mt-4 mt-md-0 btn-sm rounded-pill">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/share.svg`}
                      alt="rate"
                      height={25}
                      className="me-1"
                    />
                    Share</button>


                </div>
                <div className="p-4 d-flex small small justify-content-between">
                  <div className='text-center px-2' >
                    <p className="fw-bold mb-1">GH₵1k+</p>
                    <p className="mb-0 text-nowrap"> Total Earnings</p>
                  </div>
                  <div className='text-center px-2'>
                    <p className="fw-bold mb-1">5</p>
                    <p className="mb-0 text-nowrap"> Total jobs</p>
                  </div>
                  <div className='text-center px-2'>
                    <p className="fw-bold mb-1">5</p>
                    <p className="mb-0 text-nowrap"> Total ratings</p>
                  </div>


                </div>


              </div>

            </div>

          </div>

          <div className='card h-auto mb-4'>
            <div className="row g-0">
              <div className='col-12 col-md-4 '>
                <div className='border-end'>
                  <div className='p-4 border-bottom py-5'>
                    <h6 className="fw-bold mb-3 small text-center">Get better visibility. Complete profile</h6>

                    <div className='text-center'>
                      <p className="mb-1 small">Profile completeness</p>
                      <ProgressBar now={now} label={`${now}%`} />
                    </div>

                  </div>
                  <div className='p-4 border-bottom'>
                    <h6 className="fw-bold mb-3 text-success">Languages</h6>

                    <div>
                      <Select
                        defaultValue={[Languages[0]]}
                        isMulti
                        name="colors"
                        options={Languages}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>

                  </div>
                  <div className='p-4 border-bottom'>
                    <div className='d-flex align-items-baseline'>
                      <h6 className="fw-bold mb-1 text-success me-2">Verification</h6>
                      <span className="editinfo" onClick={() => setVerificationmodalShow(true)}>{editSection}</span>
                    </div>

                    <div className='pt-3'>
                      <p className='mb-0'>No Verification added</p>
                    </div>

                    <EditVerificationModal
                      show={verificationmodalShow}
                      onHide={() => setVerificationmodalShow(false)}
                      Tittle="Add ID Verification"
                    />

                  </div>
                  <div className='p-4 border-bottom'>
                    <div className='d-flex align-items-baseline'>
                      <h6 className="fw-bold mb-1 text-success me-2">Education</h6>
                      <span className="editinfo" onClick={() => setEducationmodalShow(true)}>{editSection}</span>
                    </div>

                    <div className='pt-3'>
                      <div className='mb-4'>
                        <h6 className="fw-bold mb-0">NVTI</h6>
                        <p className='mb-0'>Hair dressing apprenticeship</p>
                        <p className="mb-0">2010-2014</p>
                      </div>
                      <div className='mb-4'>
                        <h6 className="fw-bold mb-0">Presby Junior High School</h6>
                        <p className='mb-0'>Hair dressing apprenticeship</p>
                        <p className="mb-0">2010-2014</p>
                      </div>
                    </div>


                    <EditEducationModal
                      show={educationmodalShow}
                      onHide={() => setEducationmodalShow(false)}
                      Tittle="Add education"
                    />

                  </div>

                  {/* <div className='p-4 border-bottom'>
                    <h6 className="fw-bold mb-1 text-success">Recent Work images</h6>

                  </div> */}
                </div>

              </div>
              <div className='col-12 col-md-8'>
                <div className='p-4'>
                  <h6 className="fw-bold mb-3 text-success">Services you offer on Quickjobs</h6>

                  <div>
                    <Select
                      defaultValue={[Skills[0]]}
                      isMulti
                      name="colors"
                      options={Skills}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>

                </div>
                <div className='p-4'>
                  <h6 className="fw-bold mb-3 text-success">About you</h6>

                  <textarea
                    type="email"
                    className="form-control"
                    id="yourself"
                    placeholder="Write few words to introduce yourself, what you do and your charges to enable people find you"
                    onChange={() => { }}
                    value={''}
                    rows={7}
                  />

                </div>

                <div className='p-4'>


                  <div>
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                        

                          <div>
                            <div className='d-flex align-items-center'>
                              <h6 className="fw-bold mb-0 text-success me-2">Recent Work images</h6>
                              <span className="editinfo me-2" onClick={onImageUpload} {...dragProps}>{addSection}</span>
                              <span className="editinfo" onClick={onImageRemoveAll}>{deleteSection}</span>
                            </div>
                            <p className='small text-muted'>Add up to 5 images of you while working</p>
                          </div>



                          <div className='d-flex flex-wrap mt-4' style={{ gap: '13px' }}>
                            {imageList.map((image, index) => (
                              <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                  <button className='update me-2' onClick={() => onImageUpdate(index)}>{alteditSection}</button>
                                  <button className='remove' onClick={() => onImageRemove(index)}>{deleteSection}</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    
                    </ImageUploading>
                  </div>

                </div>

              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Editprofile