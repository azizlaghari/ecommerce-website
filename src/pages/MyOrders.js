import React from 'react'
import Layout from '../layout/Layout'
import { Divider } from 'antd'
import ellipse from '../assets/productListing/ellipse.png'


const MyOrders = () => {
    return (
        <Layout active="my-orders">
            <div className='myOrders'>
                <Divider></Divider>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>MY ORDERS</p>
                </div>
                <div className='leftSide'>
                    <div>
                        <p>My Account</p>
                        <p>Manage your personal Information</p>
                    </div>
                    <div>
                        <p>My Active orders</p>
                        <p>View and manage your current orders</p>
                    </div>
                    <div>
                        <p>Order History</p>
                        <p>View and manage your past orders</p>
                    </div>
                    <div>
                        <p>Invoices</p>
                        <p>View and download order invoices</p>
                    </div>
                    <div>
                        <p>Address Book</p>
                        <p>Add and manage shipping addresses</p>
                    </div>
                </div>
                <div className='myOrderList'>

                </div>
            </div>
        </Layout>
    )
}

export default MyOrders
