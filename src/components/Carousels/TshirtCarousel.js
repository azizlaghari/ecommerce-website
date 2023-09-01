import React from 'react'
import TshirtComp from '../TshirtComp'
// import { Carousel } from 'antd'

// import carouselLine from '../../assets/carouselLine.png'
// import carouselRightIcon from '../../assets/carouselRightIcon.png'
// import carouselLeftIcon from '../../assets/carouselLeftIcon.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};
// * const CustomDot = ({ onClick, ...rest }) => {
//   const {
//     index,
//     active,
//   } = rest;
//   const carouselItems = [];
//   return (
//     <div
//       className={active ? "active" : "inactive"}
//       onClick={() => onClick()}
//     >
//       <img src={carouselLeftIcon}/>
//       <img src={carouselLine}/>
//       <img src={carouselRightIcon}/>

//       {React.Children.toArray(carouselItems)[index]}
//     </div>
    
//   );
// };
const TshirtCarousel = ({ carouselData }) => {
  // const onChange = () => {}
  return (
    <div>
      <Carousel responsive={responsive}  >
        {carouselData.map((item, index) => (
          <div
            key={index}
            // style={{ height: '400px', width: '50%' }}
          >
            <div style={{ display: 'flex' }}>
              <TshirtComp
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                heartWhiteIcon={item.heartWhiteIcon}
                image={item.image}
                logo={item.logo}
                colorsWheel={item.colorsWheel}
                colors={item.colors}
                toptags={item.toptags}
              />
             
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TshirtCarousel

// ! for custom dot show on carousel 
// showDots customDot={<CustomDot />}