import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Divider, Tabs } from 'antd'
import ellipse from '../assets/productListing/ellipse.png'
import FAQPageAccordin from '../components/Accordion/FAQPageAccordin'
import arrow_right from '../assets/arrow_right.png'

// import searchIcon from '../assets/searchIcon.png'

const FAQ = () => {
    const { TabPane } = Tabs // Destructuring TabPane from Tabs
    const [size, setSize] = useState() // State for window size
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth) // Update state with window width
        }
        window.addEventListener('resize', updateSize) // Add resize event listener
        updateSize() // Initial call to set initial size
        return () => window.removeEventListener('resize', updateSize) // Remove event listener on cleanup
    }, []) // Empty dependency array for one-time setup
    return (
        <>
            <Layout active={'faq'}>
                <Divider></Divider>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>FAQ</p>
                </div>
                <div className='faq'>
                    <div className='faqBox'>
                        <div className='faqContent'>
                            <h2>common questions & answers</h2>
                            <input className='icon' type='search' placeholder='Search your anwser'></input>
                        </div>
                    </div>
                    <div className='faqTabs'>
                        <Tabs
                            tabPosition={size > 800 ? 'left' : 'top'}
                            className='faqTabMain' defaultActiveKey='tab1'>
                            <TabPane
                                tab={
                                    <div className='faqTabData1'>
                                        <p>Profile clothes/Clothes with print</p>
                                    </div>
                                }
                                key={'tab1'}
                            >
                                <div className='faqTabContent'>
                                    <FAQPageAccordin/>
                                </div>

                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='faqTabData2'>
                                        <p>Delivery</p>
                                    </div>
                                }
                                key={'tab2'}
                            >
                                <div className='faqTabContent'>

                                </div>

                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='faqTabData3'>
                                        <p>Order & Payment</p>
                                    </div>
                                }
                                key={'tab3'}
                            >
                                <div className='faqTabContent'>

                                </div>

                            </TabPane>
                        </Tabs>
                    </div>
                    <div className='contactUsBox'>
                        <h2>Did you not get an answer to your question?</h2>
                        <p>Then we hope we can help you further! You can either chat with us in the bottomright corner, call us or send us an email!</p>
                        <button className='greenBTN'>Contact Us<img src={arrow_right}/></button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default FAQ
