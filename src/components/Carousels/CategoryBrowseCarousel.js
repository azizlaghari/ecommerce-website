import React from 'react'
import { Carousel } from 'antd';


const CategoryBrowseCarousel = ({ CategoryBrowseCarouselData }) => {
    const onChange = () => {
    };
    const carouselHeading = {
        align: 'center',
        color: '#000',
        fontFamily: 'Barlow',
        fontSize: "40px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "50px",
        textTransform: 'capitalize',
        marginBottom: "2rem",
    }


    return (
        <div className='mobileCategoryCarousel' style={{ backgroundColor: '#D6EADE', display: 'flex', flexDirection: 'column', height: '500px', justifyContent: 'center', textAlign: 'center' }}>
            <h2 style={carouselHeading}>Related Categories to browse</h2>
            <Carousel afterChange={onChange}>
                {CategoryBrowseCarouselData?.map((item, index) => (
                    <div className='model-productCD' style={{ display: "flex" }} key={index}>
                        <img src={item.images} />
                        <p className='tags modelTAG-productCD'>{item.tags}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CategoryBrowseCarousel
