import Layout from '../layout/Layout'
import React from 'react'
import ellipse from '../assets/productListing/ellipse.png'
import '../styles/pages/ProductListing.css'
import TshirtIMG from '../components/Product Listing/TshirtIMG'
import TshirtsList from '../components/TshirtsList'
// icons
import needHelpBox_call from '../assets/needHelpBox_call.png'
import needHelpBox_email from '../assets/needHelpBox_email.png'
import InformationAccordion from '../components/Accordion/InformationAccordion'

const ProductListing = () => {
    return (
        <>
            <Layout active={'product-listing'}>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>PRINT WEAR</p>
                    <img src={ellipse} />
                    <p className='grayText-proctuctListing'>T-SHIRTS</p>
                </div>
                <div className='TshirtIMG-main'>
                    <TshirtIMG />
                </div>
                <div className='ProductPage'>
                    <div className='TshirtsList-main'>
                        <TshirtsList />
                    </div>
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
                    <div className='InformationAccordion-main'>
                        <InformationAccordion />
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default ProductListing
