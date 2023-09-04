import React from 'react'
import Layout from '../layout/Layout'
import { Dropdown, Space } from 'antd'
import ellipse from '../assets/productListing/ellipse.png'
import arrow_right from '../assets/arrow_right.png'
import arrow_drop_down from '../assets/productListing/arrow_drop_down.png'
import TshirtsList from '../components/TshirtsList'
import InformationAccordion from '../components/Accordion/InformationAccordion'
// icons
import needHelpBox_call from '../assets/needHelpBox_call.png'
import needHelpBox_email from '../assets/needHelpBox_email.png'


const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        // icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
]

const ManufacturesDetails = () => {
    return (
        <>
            <Layout active={'manufactures-details'}>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>Manufacturer</p>
                    <img src={ellipse} />
                    <p className='grayText-proctuctListing'>B&C Collection</p>
                </div>
                <div className='ManufacturesDetails'>
                    <div className='ManCollectionBG'>
                        <div className='ManufacturesDetails-content'>
                            <h2>B&C Collection</h2>
                            <p>B&C Collection is a European brand that offers profile clothing with inspiration and innovation for most different industries, with an experience of over 20 years in the textile industry.</p>
                            <button className='greenBTN' >Read more<img src={arrow_right} /></button>
                        </div>
                    </div>
                    <div className='check-products'>
                        <div className='checkProductText'>
                            <p className='Check-out-the-products'>Check out the products</p>
                            <p className='PRODUCTS-250'>250 PRODUCTS</p>
                        </div>
                        <p className='filter'>Filter</p>
                        <div className='productDropdown'>
                            <div className='checkProductText'>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <p className='sortBy-text'>Sort by<span className='colon'>:</span> <span className='feature'>Featured</span><img className='arrow_drop_down' src={arrow_drop_down} />
                                            </p>
                                            {/* <DownOutlined /> */}
                                        </Space>
                                    </a>

                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='ProductPage'>
                        <div className='TshirtsList-main'>
                            {/* sanding props to hide some data */}
                            <TshirtsList hideSoftTshirtBox={true} hideCollapseTags={true} />
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
                </div>
            </Layout>
        </>
    )
}

export default ManufacturesDetails
