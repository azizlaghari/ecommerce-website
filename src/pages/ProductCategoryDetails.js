import React from 'react'
import Layout from '../layout/Layout'
import blueBGModel from '../assets/blueBGModel.png'
import FeatureCards from '../components/Cards/featureCards'
// icon
import chat from '../assets/chat.png'
import approve from '../assets/approve.png'
import sketching from '../assets/sketching.png'
import t_shirt from '../assets/t-shirt.png'
//  Help icons
import needHelpBox_call from '../assets/needHelpBox_call.png'
import needHelpBox_email from '../assets/needHelpBox_email.png'
import { Col, Row } from 'antd'
// images
import productCD1 from '../assets/productCategoryIMG/productCD1.png'
import productCD2 from '../assets/productCategoryIMG/productCD2.png'
import productCD3 from '../assets/productCategoryIMG/productCD3.png'
import productCD4 from '../assets/productCategoryIMG/productCD4.png'
import productCD5 from '../assets/productCategoryIMG/productCD5.png'
import productCD6 from '../assets/productCategoryIMG/productCD6.png'
import productCD7 from '../assets/productCategoryIMG/productCD7.png'
import productCD8 from '../assets/productCategoryIMG/productCD8.png'
import ModelsCarousel from '../components/Carousels/ModelsCarousel'
// import TshirtComp from '../components/TshirtComp'

// t shirt images for cards
import tshirt1 from '../assets/productListing/tshirt1.png'
import tshirt2 from '../assets/productListing/tshirt2.png'
import tshirt3 from '../assets/productListing/tshirt3.png'
import tshirt4 from '../assets/productListing/tshirt4.png'
import tshirt5 from '../assets/productListing/tshirt5.png'
import tshirt6 from '../assets/productListing/tshirt6.png'
import tshirt7 from '../assets/productListing/tshirt7.png'
import tshirt8 from '../assets/productListing/tshirt8.png'
import tshirt9 from '../assets/productListing/tshirt9.png'
// t shirt logo for cards
import tlogo1 from '../assets/productListing/tlogo1.png'
import tlogo2 from '../assets/productListing/tlogo2.png'
import tlogo3 from '../assets/productListing/tlogo3.png'
import TshirtCarousel from '../components/Carousels/TshirtCarousel'
import Brands from '../components/Brands'
import InformationAccordion from '../components/Accordion/InformationAccordion'
import PrintWearDrawer from '../components/Drawer/PrintWearDrawer'

const tshirtData = [
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt1,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt2,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt3,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt4,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },

    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt5,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt6,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt7,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt8,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },

    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt9,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
]

const modelsData = [
    {
        images: productCD1,
        tags: 'T-shirt'
    },
    {
        images: productCD2,
        tags: 'T-shirt'
    },
    {
        images: productCD3,
        tags: 'T-shirt'
    },
    {
        images: productCD4,
        tags: 'T-shirt'
    },
    {
        images: productCD5,
        tags: 'T-shirt'
    },
    {
        images: productCD6,
        tags: 'T-shirt'
    },
    {
        images: productCD7,
        tags: 'T-shirt'
    },
    {
        images: productCD8,
        tags: 'T-shirt'
    },
]

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

const ProductCategoryDetails = () => {
    return (
        <>
            <Layout active={'product-category-details'}>
                <div className='ProductCategoryDetails'>
                    <div className='printWear-container '>
                        <img className='blueGBModel' src={blueBGModel} />
                        <div className='leftText-printWear pinkBGMobile'>
                            <h2>Print wear</h2>
                            <p>Profile clothing is available in many different designs, ranging from work clothes with protective properties to training clothes with functional properties for sports and sports. What is common to all profile clothing is that it is clothing with print, whether it is protective clothing or leisure clothing.</p>
                            <PrintWearDrawer />
                        </div>
                    </div>
                    {/* Feature cards section */}
                    <Row className='featureCards' gutter={[20, 20]}>
                        {data.map((item, index) => {
                            return (
                                <Col lg={6} md={6} sm={12} xs={12} key={index} >
                                    <FeatureCards text={item.text} icon={item.icon} />
                                </Col>
                            )
                        })}
                    </Row>
                    {/* Models Section */}
                    <div className='modelSectionPC'>
                        <Row gutter={[0, 20]}>
                            {modelsData.map((item, index) => (
                                <Col xl={6} lg={8} md={12} sm={12} xs={24} key={index}>
                                    <div className='model-productCD'>
                                        <img src={item.images} />
                                        <p className='tags modelTAG-productCD'>{item.tags}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    {/* Model Section for Mobile */}
                    <div className='mobileCarousel'>
                        <ModelsCarousel modelsData={modelsData} />
                    </div>
                    {/* t shirts carousel section 1 */}
                    <div className='tshirtCards'>
                        <h2>Popular articles</h2>
                    </div>
                    <div className='' >
                        <TshirtCarousel carouselData={tshirtData} />
                    </div>
                    {/* Great news! Big screen section */}
                    <div className='greatNews greatNewsMobileIMG'>
                        <div className='greatNews-text'>
                            <h1 className='greatNews-heading greatNews-mobile'>Great news!</h1>
                            {/* <p className='greatNews-discp greatNews-mobile'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod nulla ut orci cursus lobortis.</p> */}
                            <button className='greatNews-btn greatNews-mobile'>Shop now</button>
                        </div>
                    </div>
                    {/* t shirts carousel section 2 */}
                    <div className='tshirtCards'>
                        <h2>Newly Added articles</h2>
                    </div>
                    <div className='' >
                        <TshirtCarousel carouselData={tshirtData} />
                    </div>
                    {/* Brands */}
                    <div className='Brands'>
                        <Brands />
                    </div>
                    {/* Help Box */}
                    <div className='needHelpBox'>
                        <h2 className='needHelpBox-heading'>Need help? We are happy to help you</h2>
                        <div className='needHelpBox-call-email'>
                            <div className='needHelpBox-call'>
                                <img src={needHelpBox_call} />
                                <div className='needHelpBox-text-num'>
                                    <p className='needHelpBox-text'>call us at</p>
                                    <p className='needHelpBox-num'>010-551 88 60</p>
                                </div>
                            </div>
                            <div className='needHelpBox-call'>
                                <img src={needHelpBox_email} />
                                <div className='needHelpBox-text-num'>
                                    <p className='needHelpBox-text'>drop us a mail at</p>
                                    <p className='needHelpBox-num'>hej@profilewear.se</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Information Accordion */}
                    <div className='InformationAccordion-main'>
                        <InformationAccordion />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductCategoryDetails
