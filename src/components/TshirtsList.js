import React from 'react'
// images
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
import colorsWheel from '../assets/colorsWheel.png'
import heartWhiteIcon from '../assets/heartWhiteIcon.png'


import { Col, Row } from 'antd'
import TshirtComp from './TshirtComp'
// import InformationAccordion from './Accordion/InformationAccordion'
import LeftCollapse from './LeftCollapse'
import SoftTshirtBox from './modal/SoftTshirtBox'
// import SearchNone from './Drawer/SearchNone'

const tshirtData = [
  {
    id: 1,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt1,
    logo: tlogo1,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 2,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt2,
    logo: tlogo1,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 3,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt3,
    logo: tlogo1,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 4,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt4,
    logo: tlogo2,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 5,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt5,
    logo: tlogo2,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 6,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt6,
    logo: tlogo2,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 7,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt7,
    logo: tlogo3,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 8,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt8,
    logo: tlogo3,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
  {
    id: 9,
    title: 'Cheap t shirt',
    subtitle:
      'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
    price: 'From 36.55 SEK',
    heartWhiteIcon: heartWhiteIcon,
    image: tshirt9,
    logo: tlogo3,
    toptags: ['best seller', 'cheap t-shirt'],
    colorsWheel: colorsWheel,
    colors: '02 color variants',
  },
]

const TshirtsList = ({ hideSoftTshirtBox, hideCollapseTags }) => {
  return (
    <>
      <div className='leftCollapse-parent'>
        <div className='LeftCollapse-main'>
          <LeftCollapse hideCollapseTags={hideCollapseTags} />
        </div>
        <div className='TshirtsList'>
          {!hideSoftTshirtBox && <div className='softTshirtBox' >
            <div className='leftText'>
              <p className='title-softTshirtBox'>Soft T-shirts for pleasant comfort</p>
              <p className='discp-softTshirtBox'>
                Are you looking for a soft t-shirt that is comfortable to wear? Here is a large
                selection of our soft t-shirts that give you the pleasant comfort that feels soft and
                gentle.
              </p>
            </div>
            {/* Modal */}
            <div className='SoftTshirtBox-modal'>
              <SoftTshirtBox />
            </div>
          </div>}

          <div className='tshirtCards'>
            <div className='tshirtCard'>
              <Row>
                {tshirtData.map((item, index) => {
                  return (
                    <Col lg={8} md={8} sm={12} xs={12} key={index}>
                      <TshirtComp
                        id={item.id}
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
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TshirtsList
