import React from 'react'

const TshirtComp = ({ image, title, subtitle, price, colors, logo, toptags, colorsWheel, heartWhiteIcon }) => {
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
            <img className='heartWhiteIcon' src={heartWhiteIcon}/>
            <img src={image} />
          </div>
          <div className='logo-TshirtComp'>
            <img src={logo} />
          </div>
          <p className='title-TshirtComp'>{title}</p>
          <p className='subtitle-TshirtComp'>{subtitle}</p>
          <p className='price-TshirtComp'>{price}</p>
          <div className='colors'>
            <img className='colorsWheel-TshirtComp' src={colorsWheel}></img>
            <p className='colors-TshirtComp'>{colors}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TshirtComp
