import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import Img1 from '../../assets/Images/california.jpg'
import Img2 from '../../assets/Images/paris.jpg'
import Img3 from '../../assets/Images/dublin.jpg'
const ComponentCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src={Img1} className="d-block" layout="responsive"/>

          <Carousel.Caption>
            <h1 className="display-4">Califórnia</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Img2} layout="responsive"/>

          <Carousel.Caption>
            <h1 className="display-4">Paris</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Img3} layout="responsive"/>

          <Carousel.Caption>
            <h1 className="display-4">Dublin</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ComponentCarousel
