import React from 'react';
// import { Carousel } from 'antd';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
  },
  desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
  },
  tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};

const ModelsCarousel = ({ modelsData }) => {
    const onChange = () => {
    };
    return (
        <Carousel responsive={responsive} afterChange={onChange}>
            {modelsData?.map((item, index) => (
                <div className='model-productCD' style={{display: "flex"}}  key={index}>
                    <img src={item.images} />
                    <p className='tags modelTAG-productCD'>{item.tags}</p>
                </div>
            ))}
        </Carousel>
    );
};
export default ModelsCarousel;