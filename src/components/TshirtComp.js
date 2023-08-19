import React from 'react'
import '../styles/components/TshirtComp.css'

const TshirtComp = ({ image, title, subtitle, price, colors, logo, toptags }) => {
  return (
    <>
      <div className='TshirtComp'>
        <div className='tshirt-container'>
          <div className='image-TshirtComp'>
            <div className='toptags-TshirtComp'>
              {toptags.map((item, i) => {
                return (
                  <p key={i} className='toptags'>
                    {item}
                  </p>
                )
              })}
            </div>
            <img src={image} />
          </div>

          <div className='logo-TshirtComp'>
            <img src={logo} />
          </div>
          <p className='title-TshirtComp'>{title}</p>
          <p className='subtitle-TshirtComp'>{subtitle}</p>
          <p className='price-TshirtComp'>{price}</p>
          <p className='colors-TshirtComp'>{colors}</p>
        </div>
      </div>
    </>
  )
}

export default TshirtComp
