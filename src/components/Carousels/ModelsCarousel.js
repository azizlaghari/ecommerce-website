import React from 'react';
import { Carousel } from 'antd';

const ModelsCarousel = ({ modelsData }) => {
    const onChange = () => {
    };
    return (
        <Carousel afterChange={onChange}>
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