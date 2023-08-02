import React from 'react'

import '../../styles/components/Cards/FeatureCards.css'

const FeatureCards = ({ text, icon }) => {
  return (
    <div>
      <div className='featureIcons'>
        <img src={icon}></img>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default FeatureCards
