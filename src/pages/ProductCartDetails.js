import React from 'react'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import arrow_right from '../assets/arrow_right.png'
import shoppingCartIMG1 from '../assets/shoppingCartIMG1.png'
import shoppingCartIMG2 from '../assets/shoppingCartIMG2.png'
import deleteIcon from '../assets/delete.png'
import ProductCartTable from '../components/Table/ProductCartTable'
import { Divider } from 'antd'



const ProductCartDetails = () => {
    return (
        <>
            <Layout active='product-cart-details'>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>PRODUCT CART DETAILS</p>
                </div>
                <div className='ProductCartDetails'>
                    <div className='topHeading'>
                        <div className='productHeadingItems'>
                            <h6>Shopping cart</h6>
                            <p>02 items</p>
                        </div>
                        <div className='shoppingBTN'>
                            <button>Continue shopping<img src={arrowRightGreen} /></button>
                        </div>
                    </div>
                    <div className='productTableSummary d-flex'>
                        <div className='productTable'>
                            <div className='productTopdetails'>
                                <div className='leftProductDetaisl'>
                                    <img src={shoppingCartIMG1} />
                                    <div className='productDetaisl'>
                                        <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                        <p>350 x 196.00 SEK</p>
                                        <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                                    </div>

                                </div>
                                <div className='rightPriceDel'>
                                    <p>37,905.00 SEK</p>
                                    <img src={deleteIcon} />
                                </div>
                            </div>
                            <div className='table'>
                                <ProductCartTable />
                            </div>
                            <div className='productTopdetails'>
                                <div className='leftProductDetaisl'>
                                    <img src={shoppingCartIMG2} />
                                    <div className='productDetaisl'>
                                        <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                        <p>350 x 196.00 SEK</p>
                                        <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                                    </div>

                                </div>
                                <div className='rightPriceDel'>
                                    <p>37,905.00 SEK</p>
                                    <img src={deleteIcon} />
                                </div>
                            </div>
                            <div className='table'>
                                <ProductCartTable />
                            </div>
                        </div>
                        <div className='productSummary'>
                            <h6>Order summary</h6>
                            <div className='summaryBox'>
                                <div className='productAmount'>
                                    <p>Item (s) Total</p>
                                    <p>Shipping Charges</p>
                                    <Divider />
                                    <p>Sub Total</p>
                                    <p>Tax (25%)</p>
                                    <Divider />
                                    <p>Grand Total</p>
                                </div>
                                <div className='productNum'>
                                    <p>1,04,520.00 SEK</p>
                                    <p>1,04,520.00 SEK</p>
                                    <Divider />
                                    <p>1,04,520.00 SEK</p>
                                    <p>1,04,520.00 SEK</p>
                                    <Divider />
                                    <p>1,04,520.00 SEK</p>
                                </div>
                            </div>
                            <button>Continue with order<img src={arrow_right} /></button>
                        </div>
                        <div className='productSummaryMobile'>
                            <div className='leftText'>
                                <p>1,31,275.00 SEK</p>
                                <a href='#'>View order summary</a>
                            </div>
                            <div className='rightBTN'>
                                <button>Continue with order<img src={arrow_right} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default ProductCartDetails
