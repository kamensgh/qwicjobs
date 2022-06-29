import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Homecarousel = () => {
  return (
    <>
    <Carousel fade indicators={false} className="mt-4" controls={false}>
  <Carousel.Item>
    <img
      className="d-block ms-auto"
      src={`${process.env.PUBLIC_URL}/images/bannerimg1.png`}
      alt="First slide"
    />
    <Carousel.Caption className='text-start'>
    <p className='mb-1 h5'> Need a Nanny?</p>
      <p className='mb-0 h5'> Find one close by</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block ms-auto"
      src={`${process.env.PUBLIC_URL}/images/bannerimg2.png`}
      alt="Second slide"
    />

    <Carousel.Caption  className='text-start'>
      <p className='mb-1 h5'> Need a Painter?</p>
      <p className='mb-0 h5'> Find one close by</p>

     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Homecarousel