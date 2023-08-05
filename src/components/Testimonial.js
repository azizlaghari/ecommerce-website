import React from 'react'
import '../styles/components/Testimonial.css'

import avatar from '../assets/avatar.png'

const url = avatar;


import { Carousel, Avatar } from 'antd'
const contentStyle = {
  // margin: '5rem 12rem',
  // height: '160px',
  color: '#000',
  // lineHeight: '160px',
  textAlign: 'left',
  background: 'transparent',
}

const Testimonial = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <div>
      <Carousel afterChange={onChange}>
        <div className='review'>
          <div className='heading'>
            <h2>What our client says...</h2>
          </div>
          <div>
            <p className='testimonialText' style={contentStyle}>
              <span className='testimonialSaider'>Annette Black said</span> Stylish sweaters and prints. Good treatment. However,
              the girl&apos;s model was a little smaller than &quot;usual&quot;, fit but would have
              rather gone up a size if it said so.
            </p>
            <div className='avatar'>
              <Avatar src={<img src={url} alt="avatar" />} />
              <div className='avatarDetail'>
                <span className='avatarName'>Annette Black</span>
                <span className='avatarTitle'>Some Dummy Company</span>
              </div>
            </div>
          </div>
        </div>
        <div className='review'>
          <div className='heading'>
            <h2>What our client says...</h2>
          </div>
          <div>
            <p className='testimonialText' style={contentStyle}>
              <span className='testimonialSaider'>Annette Black said</span> Stylish sweaters and prints. Good treatment. However,
              the girl&apos;s model was a little smaller than &quot;usual&quot;, fit but would have
              rather gone up a size if it said so.
            </p>
            <div className='avatar'>
              <Avatar src={<img src={url} alt="avatar" />} />
              <div className='avatarDetail'>
                <span className='avatarName'>Annette Black</span>
                <span className='avatarTitle'>Some Dummy Company</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonial
