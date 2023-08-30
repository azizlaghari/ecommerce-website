import React from 'react'
import Layout from '../layout/Layout'
import OrderSuccessfullIMG from '../assets/OrderSuccessfullIMG.png'
import arrow_right from '../assets/arrow_right.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'


const OrderSuccessfull = () => {
    return (
        <>
            <Layout active={'order-successfull'}>
                <div className='OrderSuccessfull'>
                    <div className='leftIMG'>
                        <img src={OrderSuccessfullIMG} />
                    </div>
                    <div className='rightText'>
                        <div className='text'>
                            <h4>Order Successfull!</h4>
                            <p>Thank you for shopping with ProfileWear. The order confirmation and all the details have been sent to <span>darrellsteward23@gmail.com</span></p>
                            <p>Estimated delivery from <span>20 June 2023 to 25 June 2023</span></p>
                        </div>
                        <div className='btns'>
                            <button className='greenBTN'>My Orders <img src={arrow_right} /></button>
                            <button className='whiteBTN'>Cancel Orders <img src={arrowRightGreen}/></button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default OrderSuccessfull
