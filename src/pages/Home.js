import HeroSection from '../components/HeroSection'
import Testimonial from '../components/Testimonial'
import Layout from '../layout/Layout'
import '../styles/pages/Home.css'
import Box1 from '../components/Sections/Section2'
import TrendingSection from '../components/Sections/TrendingSection'

// Images
import clothe1 from '../assets/clothe1.png'
import clothe2 from '../assets/clothe2.png'
import clothe3 from '../assets/clothe3.png'
import clothe4 from '../assets/clothe4.png'
import { Col, Row } from 'antd'

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
      <div className='Box1'>
        <Box1 />
      </div>
      <div>
        <p className='titleTreanding'>Treanding Now</p>
        <Row className='TrendingSection' gutter={[20, 20]}>
          {data.map((item, index) => {
            return (
              <Col md={6} sm={12} xs={12} key={index}>
                <TrendingSection title={item.title} subtitle={item.subtitle} image={item.image} tags={item.tags} />
              </Col>
            )
          })}
        </Row>
      </div>
    </Layout>
  )
}

export default Home
