import React from 'react';
import { Carousel } from 'antd';
import TrendingSection from '../Sections/TrendingSection';

const TrendingCarousel = ({ carouselData }) => {
    const onChange = () => {
    };
    return (
        <Carousel afterChange={onChange}>
            {carouselData.map((item, index) => (
                <div key={index} style={{ height: '400px', width: '100%' }}>
                    <TrendingSection title={item.title} subtitle={item.subtitle} image={item.image} tags={item.tags} />
                </div>
            ))}
        </Carousel>
    );
};
export default TrendingCarousel;