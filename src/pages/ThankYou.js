import React from 'react'
import Layout from '../layout/Layout'
import thankYouIMG from '../assets/thankYou.png'
import arrow_right from '../assets/arrow_right.png'


const ThankYou = () => {
    return (
        <>
            <Layout active={'thank-you'}>
                <div className='ThankYou'>
                    <img src={thankYouIMG} />
                    <h5>Thank you for your order!</h5>
                    <p>We are really appriciate your business. Be touch with us</p>
                    <button className='greenBTN'>Continue Shopping<img src={arrow_right} /></button>
                </div>
            </Layout>
        </>
    )
}

export default ThankYou
