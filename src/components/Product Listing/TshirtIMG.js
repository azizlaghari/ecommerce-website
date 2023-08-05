import React from 'react'
import "../../styles/components/ProductListing/TshirtIMG.css"
import arrowRightGreen from '../../assets/productListing/arrowRightGreen.png'
import { Dropdown, Space } from 'antd'

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
const TshirtIMG = () => {
    return (
        <>
            <div className='TshirtIMG'>
                <div className='manTshirtBG MarginTop1rem'>
                    <div className='tshirt-content'>
                        <p className='tshirt-title'>T-shirts</p>
                        <p className='tshirt-subtitle MarginTop1rem'>T-shirt with print - create stylish company shirts with us</p>
                        <p className='tshirt-description MarginTop1rem'>Few things give as professional an impression as real work clothes. So profiled sweaters, jackets and trousers where you can clearly see the company&apos;s logo.</p>
                        <button className='tshirtBTN MarginTop1rem' >Read more<img src={arrowRightGreen} /></button>
                    </div>

                </div>
                <div className='check-products'>
                    <div className='checkProductText'>
                        <p className='Check-out-the-products'>Check out the products</p>
                        <p className='PRODUCTS-250'>250 PRODUCTS</p>
                    </div>
                    <div className='productDropdown'>
                        <div className='checkProductText'>
                            <p className='sortBy-text'>Sort by:</p>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Featured
                                        {/* <DownOutlined /> */}
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TshirtIMG
