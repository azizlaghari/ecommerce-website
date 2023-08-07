import React from 'react'
import '../styles/components/ProductListing/TshirtsList.css'
import arrow_right from '../assets/arrow_right.png'
import tshirt1 from '../assets/productListing/tshirt1.png'
import tshirt2 from '../assets/productListing/tshirt2.png'
import tshirt3 from '../assets/productListing/tshirt3.png'
import tshirt4 from '../assets/productListing/tshirt4.png'
import tshirt5 from '../assets/productListing/tshirt5.png'
import tshirt6 from '../assets/productListing/tshirt6.png'
import tshirt7 from '../assets/productListing/tshirt7.png'
import tshirt8 from '../assets/productListing/tshirt8.png'
import tshirt9 from '../assets/productListing/tshirt9.png'
// logo
import tlogo1 from '../assets/productListing/tlogo1.png'
import tlogo2 from '../assets/productListing/tlogo2.png'
import tlogo3 from '../assets/productListing/tlogo3.png'
import { Col, Row } from 'antd'
import TshirtComp from './TshirtComp'

const tshirtData = [
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt1,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt2,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt3,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt4,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt5,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt6,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt7,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt8,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle: 'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt9,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
]

const TshirtsList = () => {
    return (
        <>
            <div className='TshirtsList'>
                <div className='softTshirtBox'>
                    <div className='leftText'>
                        <p className='title-softTshirtBox'>Soft T-shirts for pleasant comfort</p>
                        <p className='discp-softTshirtBox'>Are you looking for a soft t-shirt that is comfortable to wear? Here is a large selection of our soft t-shirts that give you the pleasant comfort that feels soft and gentle.</p>
                    </div>
                    <button className='btn-softTshirtBox mobile-tshirtBTN'>Read more<img src={arrow_right} /></button>
                </div>
                <div className='tshirtCards'>
                    <div className='tshirtCard'>
                        <Row>
                            {tshirtData.map((item, index) => {
                                return (
                                    <Col lg={8} md={8} sm={12} xs={12} key={index}>
                                        <TshirtComp title={item.title} subtitle={item.subtitle} price={item.price} image={item.image} logo={item.logo} colors={item.colors} toptags={item.toptags} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TshirtsList
