import React from 'react'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import needHelpBox_location from '../assets/needHelpBox_location.png'
import needHelpBox_call from '../assets/needHelpBox_call.png'
import needHelpBox_email from '../assets/needHelpBox_email.png'
import arrow_right from '../assets/arrow_right.png'

const ContactUs = () => {
    return (
        <>
            <Layout active={'contact-us'}>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>DATA POLICY</p>
                </div>
                <div className='ContactUs'>
                    <div className='ContactUsBox'>
                        <h2>Customer Support</h2>
                        <div className='iconDetailsBox'>
                            <div className='iconsDetails'>
                                <div className='iconDetail'>
                                    <img src={needHelpBox_location} />
                                    <div className='text'>
                                        <p>Return to</p>
                                        <p>Swedish Profile Wear AB Box 7021,<br /> 250 07 Helsingborg</p>
                                    </div>
                                </div>
                            </div>
                            <div className='iconsDetails'>
                                <div className='iconDetail'>
                                    <img src={needHelpBox_call} />
                                    <div className='text'>
                                        <p>call us at</p>
                                        <p>010-551 88 60</p>
                                    </div>
                                </div>
                            </div>
                            <div className='iconsDetails'>
                                <div className='iconDetail'>
                                    <img src={needHelpBox_email} />
                                    <div className='text'>
                                        <p>drop us a mail at</p>
                                        <p>hej@profilewear.se</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='bgMap'>
                            <h2>Get In Touch</h2>
                            <div className='contactInputs'>
                                <form>
                                    <div className='nameCompany'>
                                        <div className='inputLabel'>
                                            <label htmlFor='name'>
                                                Name <span>*</span>
                                            </label>
                                            <input placeholder='Enter your name' type='text' id='name' name='name' />
                                        </div>
                                        <div className='inputLabel'>
                                            <label htmlFor='companyName'>
                                                Company <span>*</span>
                                            </label>
                                            <input
                                                placeholder='Enter your Company Name'
                                                type='text'
                                                id='companyName' name='companyName'
                                            />
                                        </div>
                                    </div>
                                    <div className='nameCompany'>
                                        <div className='inputLabel'>
                                            <label htmlFor='phone'>
                                                Phone <span>*</span>
                                            </label>
                                            <input
                                                placeholder='Enter your valid Phone Number'
                                                type='text'
                                                id='pNumber' name='pNumber'
                                            />
                                        </div>
                                        <div className='inputLabel'>
                                            <label htmlFor='email'>
                                                Email ID <span>*</span>
                                            </label>
                                            <input
                                                placeholder='Enter your valid Email ID'
                                                type='text'
                                                id='email' name='email'
                                            />
                                        </div>
                                    </div>
                                    <div className='inputLabel'>
                                        <label htmlFor='message'>
                                            Message <span>*</span>
                                        </label>
                                        <textarea type='message'></textarea>
                                    </div>
                                </form>
                            </div>
                            <button className='greenBTN' style={{marginTop: '3rem'}}>Submit <img src={arrow_right}/></button>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ContactUs
