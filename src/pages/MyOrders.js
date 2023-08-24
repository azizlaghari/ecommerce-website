import React, { useEffect, useState } from 'react'
import { Tabs, Divider } from 'antd'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import filter_list from '../assets/myOrderIMG/filter_list.png'
import BG from '../assets/myOrderIMG/BG.png'
import orderIMG1 from '../assets/myOrderIMG/orderIMG1.png'
import orderIMG2 from '../assets/myOrderIMG/orderIMG2.png'
import moreICON from '../assets/myOrderIMG/moreICON.png'
import MyOrdersCompo from '../components/MyOrdersCompo'

const orderListData = [
    {
        completeBTN: 'COMPLETED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG1,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'COMPLETED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG1,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'COMPLETED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG1,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'CANCELLED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG2,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'CANCELLED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG2,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'COMPLETED',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG1,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
]

const activeOrderData = [
    {
        completeBTN: 'ACTIVE',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG2,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
    {
        completeBTN: 'ACTIVE',
        orderBTN: 'ORDER ID - 51402',
        orderPlace: 'ORDER PLACED ON - TUE, 30 MAY 2023',
        moreIcon: moreICON,
        orderIMG: orderIMG1,
        productTitle: 'Hoodie with kangaroo pocket | Hooded Sweat',
        productSubtitle: 'Azure Blue  |   2-Color Print   |   Express Delivery (7 days)',
        productQuantity: 'Quantity - 350',
        orderPriceTitles: 'TOTAL ORDER PRICE',
        orderPrice: '37,905.00 SEK',
        deliveryTitle: 'Estd. delivery',
        deliveryDate: 'Mon, 05 Jun 2023',
    },
]

const MyOrders = () => {
    const { TabPane } = Tabs; // Destructuring TabPane from Tabs
    const [size, setSize] = useState(); // State for window size
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth); // Update state with window width
        }
        window.addEventListener('resize', updateSize); // Add resize event listener
        updateSize(); // Initial call to set initial size
        return () => window.removeEventListener('resize', updateSize); // Remove event listener on cleanup
    }, []); // Empty dependency array for one-time setup
    return (
        <Layout active='my-orders'>
            <div className='myOrders'>
                <Divider></Divider>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>MY ORDERS</p>
                </div>
                <div className='leftSide'>
                    <div>
                        <Tabs
                            className='tabsMain'
                            defaultActiveKey='tab3'
                            tabPosition={size > 800 ? 'left' : 'top'}
                            style={{
                                height: 'auto',
                            }}
                        >
                            <TabPane
                                tab={
                                    <div className='tabsData'>
                                        <p>My Account</p>
                                        <p>Manage your personal Information</p>
                                    </div>
                                }
                                key={'tab1'}
                            >
                                Tab 1
                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='tabsData'>
                                        <p>My Active orders</p>
                                        <p>View and manage your current orders</p>
                                    </div>
                                }
                                key={'tab2'}

                            >
                                {/* My Active orders */}
                                <div className='historyTAB'>
                                    <div className='topTab'>
                                        <h6>My Orders</h6>
                                        <div className='inputIcon'>
                                            <input type='search' placeholder='Search order' />
                                            <img src={filter_list} />
                                        </div>
                                    </div>
                                    <div className='profileSection'>
                                        <img src={BG} />
                                        <div className='profileSectionText'>
                                            <p>Courtney Henry</p>
                                            <p>Account Manager</p>
                                            <p>
                                                <span>courtney.henry@profilewear.se</span> | +46 762 01 48 16
                                            </p>
                                        </div>
                                    </div>
                                    <div className='orderList' >
                                        {activeOrderData.map((item, index) => (
                                            <div key={index}>
                                                <MyOrdersCompo
                                                    completeBTN={item.completeBTN}
                                                    orderBTN={item.orderBTN}
                                                    orderPlace={item.orderPlace}
                                                    moreIcon={item.moreIcon}
                                                    orderIMG={item.orderIMG}
                                                    productTitle={item.productTitle}
                                                    productSubtitle={item.productSubtitle}
                                                    productQuantity={item.productQuantity}
                                                    orderPriceTitles={item.orderPriceTitles}
                                                    orderPrice={item.orderPrice}
                                                    deliveryTitle={item.deliveryTitle}
                                                    deliveryDate={item.deliveryDate}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='tabsData'>
                                        <p>Order History</p>
                                        <p>View and manage your past orders</p>
                                    </div>
                                }
                                key={'tab3'}
                            >
                                {/* My History orders */}
                                <div className='historyTAB'>
                                    <div className='topTab'>
                                        <h6>My Orders</h6>
                                        <div className='inputIcon'>
                                            <input type='search' placeholder='Search order' />
                                            <img src={filter_list} />
                                        </div>
                                    </div>
                                    <div className='profileSection'>
                                        <img src={BG} />
                                        <div className='profileSectionText'>
                                            <p>Courtney Henry</p>
                                            <p>Account Manager</p>
                                            <p>
                                                <span>courtney.henry@profilewear.se</span> | +46 762 01 48 16
                                            </p>
                                        </div>
                                    </div>
                                    <div className='orderList'>
                                        {orderListData.map((item, index) => (
                                            <div key={index}>
                                                <MyOrdersCompo
                                                    completeBTN={item.completeBTN}
                                                    orderBTN={item.orderBTN}
                                                    orderPlace={item.orderPlace}
                                                    moreIcon={item.moreIcon}
                                                    orderIMG={item.orderIMG}
                                                    productTitle={item.productTitle}
                                                    productSubtitle={item.productSubtitle}
                                                    productQuantity={item.productQuantity}
                                                    orderPriceTitles={item.orderPriceTitles}
                                                    orderPrice={item.orderPrice}
                                                    deliveryTitle={item.deliveryTitle}
                                                    deliveryDate={item.deliveryDate}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='tabsData'>
                                        <p>Invoices</p>
                                        <p>View and download order invoices</p>
                                    </div>
                                }
                                key={'tab4'}
                            >
                                Tab 4
                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='tabsData'>
                                        <p>Address Book</p>
                                        <p>Add and manage shipping addresses</p>
                                    </div>
                                }
                                key={'tab5'}
                            >
                                Tab 5
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyOrders
