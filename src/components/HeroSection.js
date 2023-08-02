import React from 'react'

import { Row, Col, Divider } from 'antd'
// images
import CAPS_HATS from '../assets/capsHats.png'
import Rain_Wear from '../assets/rainWear.png'
import Sports_Wear from '../assets/sportsWear.png'
import Sunglasses from '../assets/sunglasses.png'
import heroImage1 from '../assets/heroImage1.png'

// icon
import chat from '../assets/chat.png'
import approve from '../assets/approve.png'
import sketching from '../assets/sketching.png'
import t_shirt from '../assets/t-shirt.png'


import '../styles/components/HeroSection.css'
import FeatureCards from './Cards/featureCards'

const data = [
  {
    text: 'Welcome to good atmosphere',
    icon: chat,
  },
  {
    text: 'We can print on textiles',
    icon: t_shirt,
  },
  {
    text: 'Quote & sketch within 4 hours',
    icon: sketching,
  },
  {
    text: 'Personal control of each assignment',
    icon: approve,
  },
]

const HeroSection = () => {
  const HeroImage = heroImage1
  const CapsHats = CAPS_HATS
  const RainWear = Rain_Wear
  const SportsWear = Sports_Wear
  const sunglasses = Sunglasses

  return (
    <>
      <div className='hero'>
        <div className='image'>
          <img src={HeroImage}></img>
        </div>
        <div className='textBox'>
          <h1 className='headingHero'>Clothing with print</h1>
          <p className='textHero'>
            Order printing on clothes for companies, here you will always find tailor-made clothes
            with high-quality prints at favorable prices.
          </p>
          <button className='heroBTN'>Start your search for print wear</button>
        </div>
      </div>
      <div className='featureImages'>
        <img src={CapsHats}></img>
        <img src={RainWear}></img>
        <img src={SportsWear}></img>
        <img src={sunglasses}></img>
      </div>
      <Row className='featureCards'>
        {data.map((item, index) => {
          return (
            <Col md={6} sm={12} xs={12}  key={index}>
              <FeatureCards  text={item.text} icon={item.icon} />
            </Col>
          )
        })}
      </Row>
      <Divider />

    </>
  )
}

export default HeroSection
