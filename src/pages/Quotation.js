import React from 'react'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import { Divider } from 'antd'
import arrow_right from '../assets/arrow_right.png'

const Quotation = () => {
    return (
        <>
            <Layout active={'quotation'}>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>SHOPPING CART</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>CUSTAMIZE</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>Make a quotation</p>
                </div>
                <div className='quotation'>
                    <div className='topHeading'>
                        <h6>Make a Quotation</h6>
                        <button>Continue shopping<img src={arrowRightGreen} /></button>
                    </div>
                    <div className='inputsSummary'>
                        <div className='quotationsInputs'>
                            <form>
                                <label htmlFor="email">Email<span>*</span></label>
                                <input type="text" name="email" placeholder='Enter your email id' required />
                                <div>
                                    <label htmlFor="firstname">First Name<span>*</span></label>
                                    <input type="text" name="firstname" placeholder='Enter your first name' required />
                                    <label htmlFor="lastname">Last Name<span>*</span></label>
                                    <input type="text" name="lastname" placeholder='Enter your last name' required />
                                </div>
                                <div >
                                    <label htmlFor="company">Company</label>
                                    <input type="company" name="company" placeholder='Enter your company name' required />
                                    <label htmlFor="telephone">Telephone<span>*</span></label>
                                    <input type="number" name="telephone" placeholder='Enter your phone no.' required />
                                </div>
                                <label htmlFor="message">Message<span>*</span></label>
                                <textarea type='text' placeholder='Your message'></textarea>
                                <button type='submit'>Send and done<img src={arrow_right} /></button>
                            </form>
                        </div>
                        <div className='summaryCard'>
                            <h6>Order summary</h6>
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Item (s) Total</p>
                                    <p>Shipping Charges</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                    <p>500.00 SEK</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Item (s) Total</p>
                                    <p>Shipping Charges</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                    <p>500.00 SEK</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Grand Total</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<summary Card Mobile<<<<<<<<<<<< */}
                    <div className='summaryCardMobile'>
                        <div className='titleLink'>
                            <p>Grand Total</p>
                            <a href='#'>View order summary</a>
                        </div>
                        <p>1,31,275.00 SEK</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Quotation
