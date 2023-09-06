import React from 'react'
// import { Carousel } from 'antd';
import TrendingSection from '../Sections/TrendingSection'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const TrendingCarousel = ({ carouselData }) => {
  const onChange = () => {}
  return (
    <Carousel responsive={responsive} afterChange={onChange}>
      {carouselData.map((item, index) => (
        <div
          key={index}
          // style={{ height: '400px', width: '50%' }}
        >
          <TrendingSection
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            tags={item.tags}
          />
        </div>
      ))}
    </Carousel>
  )
}
export default TrendingCarousel
