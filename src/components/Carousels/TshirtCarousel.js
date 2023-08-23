import React from 'react'
import TshirtComp from '../TshirtComp'
import { Carousel } from 'antd'

const TshirtCarousel = ({ carouselData }) => {
  const onChange = () => {}
  return (
    <div>
      <Carousel afterChange={onChange}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            // style={{ height: '400px', width: '50%' }}
          >
            <div style={{ display: 'flex' }}>
              <TshirtComp
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                logo={item.logo}
                colors={item.colors}
                toptags={item.toptags}
              />
              <TshirtComp
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                logo={item.logo}
                colors={item.colors}
                toptags={item.toptags}
              />
              <TshirtComp
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                logo={item.logo}
                colors={item.colors}
                toptags={item.toptags}
              />
              <TshirtComp
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                logo={item.logo}
                colors={item.colors}
                toptags={item.toptags}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TshirtCarousel
