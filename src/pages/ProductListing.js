import { Divider } from 'antd'
import Layout from '../layout/Layout'
import React from 'react'
import ellipse from '../assets/productListing/ellipse.png'
import '../styles/pages/ProductListing.css'
import TshirtIMG from '../components/Product Listing/TshirtIMG'
import TshirtsList from '../components/TshirtsList'
import LeftCollapse from '../components/LeftCollapse'

const ProductListing = () => {
    return (
        <>
            <Layout active={'product-listing'}>
                <Divider></Divider>
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
                    <div className='LeftCollapse-main'>
                        <LeftCollapse />
                    </div>
                    <div className='TshirtsList-main'>
                        <TshirtsList />
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default ProductListing
