import React from 'react'
import{Carousel} from 'react-bootstrap'
import Image1 from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'
import Image3 from '../assets/3.jpg'

const Slider = () => {
  return (
    <>
    <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="slide_title">First slide label</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="slide_title">Second slide label</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="slide_title">Third slide label</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Slider
