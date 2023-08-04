import HeroSection from '../components/HeroSection'
import Testimonial from '../components/Testimonial'
import Layout from '../layout/Layout'
import '../styles/pages/Home.css'
// import Box1 from '../components/Sections/Section2'
import TrendingSection from '../components/Sections/TrendingSection'

// Images
import clothe1 from '../assets/clothe1.png'
import clothe2 from '../assets/clothe2.png'
import clothe3 from '../assets/clothe3.png'
import clothe4 from '../assets/clothe4.png'

import recoIMG from '../assets/recoIMG.png'

import { Col, Row } from 'antd'
import TrendingCarousel from '../components/Carousels/TrendingCarousel'
import Section2 from '../components/Sections/Section2'
import Section3 from '../components/Sections/Section3'
import Brands from '../components/Brands'
import Section4 from '../components/Sections/Section4'
import Reference from '../components/Reference'
import ModelSection from '../components/Sections/ModelSection'
import TradeSrction from '../components/Sections/TradeSrction'

const data = [
  {
    title: 'Training clothes with print',
    subtitle: 'Sportswear for profiling comes in many different types',
    image: clothe1,
    tags: ['Workout clothes', 'sportswear']
  },
  {
    title: 'Professional clothing with profiling',
    subtitle: 'Find the right profile clothing for different professions depending on the profession',
    image: clothe2,
    tags: ['serving, kitchen & restaurant', 'sportswear']

  },
  {
    title: 'Profiled fabric bags & pouches',
    subtitle: 'Textile goods in addition to profile clothing include other textiles',
    image: clothe3,
    tags: ['Bags', 'towels', 'Umbrellas', 'Mouth guard']

  },
  {
    title: 'Profile clothing for theme & event',
    subtitle: 'Order profile clothing for the right purpose for various events and themes',
    image: clothe4,
    tags: ['cheap profile clothes', 'end of class', 'rainware', 'children’s clothing', 'headgear', 'Ecological profile clothing']

  },
]

const Home = () => {
  return (
    <Layout active={'home'}>
      <div className='heroSection'>
        <HeroSection />
      </div>
      <div className='Testimonial'>
        <Testimonial />
      </div>
      <div className='Section2'>
        <Section2 />
      </div>
      {/* TrendingCarousel */}
      <div>
        <p className='titleTreanding'>Treanding Now</p>
        <div className='trending-carousel'>
          <TrendingCarousel carouselData={data} />
        </div>
        <div className='trend-sec-container'>
          <Row className='TrendingSection' gutter={[20, 20]} >
            {data.map((item, index) => {
              return (
                <Col md={6} sm={12} xs={12} key={index}>
                  <TrendingSection title={item.title} subtitle={item.subtitle} image={item.image} tags={item.tags} />
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
      <Section3 />
      <div className='Brands'>
        <Brands />
      </div>
      <div className='Section4'>
        <Section4 />
      </div>
      <div className='Reference'>
        <Reference />
      </div>
      <div className='recoIMG'>
        <img src={recoIMG} />
      </div>
      <div className='TradeSrction'>
        <TradeSrction />
      </div>
      <div className='ModelSection'>
        <ModelSection />
      </div>
    </Layout>
  )
}

export default Home
