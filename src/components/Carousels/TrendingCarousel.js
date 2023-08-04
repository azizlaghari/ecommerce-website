import React from 'react';
import { Carousel } from 'antd';
import TrendingSection from '../Sections/TrendingSection';

// import '../../styles/components/Carousel/Carousel.css';

// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };
const TrendingCarousel = ({carouselData}) => {
    const onChange = () => {
    };
    return (
        <Carousel afterChange={onChange}>
            {carouselData.map((item, index)=>(
                <div key={index} style={{height: '400px', width: '100%'}}>
                    {/* <p>{item.title}</p> */}
                    <TrendingSection title={item.title} subtitle={item.subtitle} image={item.image} tags={item.tags} />
                </div>
            ))}
        </Carousel>
    );
};
export default TrendingCarousel;