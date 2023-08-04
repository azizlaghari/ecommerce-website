import React from 'react'
import '../styles/components/FooterPage.css';
import facebook from '../assets/social-icons/facebook.png'
import instagram from '../assets/social-icons/instagram.png'
import linkedin from '../assets/social-icons/linkedin.png'
import send from '../assets/social-icons/send.png'
import { Divider } from 'antd';

const FooterPage = () => {
    return (
        <>
            <div className='FooterPage'>
                <div className='Offers'>
                    <h4 className='footerTitleOffers'> Offers</h4>
                    <p className='footerSubtitleOffers'>Don&apos;t miss our newsletter!</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter the email address' className='emailAddress'></input>
                        <img src={send} />
                    </div>
                    <p className='email-number'>hej@profilewear.se
                        <br />
                        <br />
                        010-551 88 60</p>
                    <span className='divider'><Divider /></span>
                    <p className='copyright'>© 2023 Profilewear.se</p>
                </div>
                <div className='Customer-Service'>
                    <h4 className='footerTitleCustomer'>Customer Service</h4>
                    <a href='#'>FAQ</a>
                    <a href='#'>Trademarks</a>
                    <a href='#'>UF company</a>
                    <a href='#'>Reference</a>
                </div>
                <div className='Information'>
                    <h4 className='footerTitleInformation'>Information</h4>
                    <a href='#'>Terms of purchase</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Environmental & sustainability policy</a>
                    <a href='#'>Returns & complaints</a>
                    <a href='#'>Care advice</a>
                    <a href='#'>The blog</a>
                </div>
                <div className='Our-Story'>
                <span className='divider'><Divider /></span>

                    <h4 className='footerTitleStory'>Our Story</h4>
                    <p className='storyText'>
                        Profilewear.se helps you as a customer to make wise and sustainable choices when you need to profile clothing and other textiles. Since the start in 2012, we have carefully selected brands that give you as a customer a lot of value.
                        <br />
                        <br />
                        All processing takes place in Sweden both in-house and with partners who value the environment and sustainability.
                    </p>
                    <div className='social-icons'>
                        <img src={facebook} />
                        <img src={instagram} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterPage
