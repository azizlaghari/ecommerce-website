import React, { useEffect, useState } from 'react'
import { Tabs, Divider } from 'antd'
import Layout from '../layout/Layout'
import AddressDrawer from '../components/Drawer/AddressDrawer'
// img
import ellipse from '../assets/productListing/ellipse.png'
import filter_list from '../assets/myOrderIMG/filter_list.png'
import BG from '../assets/myOrderIMG/BG.png'
import BG2 from '../assets/myOrderIMG/BG2.png'
import orderIMG1 from '../assets/myOrderIMG/orderIMG1.png'
import orderIMG2 from '../assets/myOrderIMG/orderIMG2.png'
import moreICON from '../assets/myOrderIMG/moreICON.png'
import MyOrdersCompo from '../components/MyOrdersCompo'
import arrow_right from '../assets/arrow_right.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'

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
                            defaultActiveKey='tab5'
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
                                <div className='myAccountTab'>
                                    <h6>My Profile</h6>
                                    <div className='profileDetails'>
                                        <div className='profileIMGdetaisl'>
                                            <img src={BG2} />
                                            <div className='profileDetail'>
                                                <p className='profileTitle'>Darrell Steward</p>
                                                <p className='customerNo'>Customer No. - 350076</p>
                                                <div className='profileBTNs'>
                                                    <button className='changeImageProfile'>
                                                        Change image
                                                        <img src={arrow_right} />
                                                    </button>
                                                    <button className='removeImageProfile'>Remove image</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button>
                                            Change password
                                            <img src={arrowRightGreen} />
                                        </button>
                                    </div>
                                    <Divider />
                                    <p>Profile</p>
                                    <form>
                                        <div className='topSection'>
                                            <label htmlFor='name'>
                                                Name <span>*</span>
                                            </label>
                                            <input placeholder='Darrel Steward' type='text' id='name' name='name' />
                                            <label htmlFor='emailID'>
                                                Email ID <span>*</span>
                                            </label>
                                            <input
                                                placeholder='darrelsteward23@gmail.com'
                                                type='text'
                                                id='EmailID'
                                                name='emailID'
                                            />
                                        </div>
                                        <br></br>
                                        <div className='bottomSection'>
                                            <label htmlFor='company'>
                                                Company <span>*</span>
                                            </label>
                                            <input
                                                placeholder='Steward Industries'
                                                type='text'
                                                id='company'
                                                name='company'
                                            />
                                            <label htmlFor='phoneNo'>
                                                Phone No <span>*</span>
                                            </label>
                                            <input
                                                placeholder='+46 16 557 6098'
                                                type='text'
                                                id='phoneNo'
                                                name='phoneNo'
                                            />
                                        </div>
                                    </form>
                                    <div className='profileButton'>
                                        <button>Save changes<img src={arrow_right} /></button>
                                        <button>Delete Account<img src={arrowRightGreen} /></button>
                                    </div>
                                </div>
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
                                    <div className='orderList'>
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
                                <div className='addressBookTab'>
                                    <div className='titleandBtn'>
                                        <h6>Address book</h6>
                                        <AddressDrawer />
                                    </div>
                                    <div className='addressBoxes'>
                                        <div className='addressBoxBorder'>
                                            <div className='addressBoxTitelIcon'>
                                                <p>Jenny Wilson</p>
                                                <img src={moreICON} />
                                            </div>
                                            <p>06 51 328 4274</p>
                                            <p>Morvall Färilavägen 66, Ljusdal 827 00</p>
                                        </div>
                                        <div className='addressBoxBorder'>
                                            <div className='addressBoxTitelIcon'>
                                                <p>Jenny Wilson</p>
                                                <img src={moreICON} />
                                            </div>
                                            <p>06 51 328 4274</p>
                                            <p>Morvall Färilavägen 66, Ljusdal 827 00</p>
                                        </div>

                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyOrders
