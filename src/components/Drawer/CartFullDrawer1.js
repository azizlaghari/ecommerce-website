import React, { useState } from 'react'
import { Divider, Drawer } from 'antd'
// img
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import shoppingCartIMG1 from '../../assets/shoppingCartIMG1.png'
import shoppingCartIMG2 from '../../assets/shoppingCartIMG2.png'
import deleteIcon from '../../assets/delete.png'
import editIcon from '../../assets/edit.png'
import CartDeleteModal from '../modal/CartDeleteModal'

const CartFullDrawer1 = () => {
    const [open, setOpen] = useState(true)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }


    return (
        <>
            <div type='primary' onClick={showDrawer}>
                <AiOutlineShoppingCart />
            </div>
            <Drawer
                className='CartFullDrawer1-main'
                // title='What are you looking for?'
                placement='right'
                onClose={onClose}
                open={open}
                headerStyle={{ display: 'none' }}
            >
                <div className='CartFullDrawer1TitleIcon'>
                    <p>Shopping Cart</p>
                    <span><LiaTimesSolid onClick={onClose} /></span>
                </div>
                <div className='CartFullDrawer1-container'>
                    <p>There are <span>02 items</span> in your cart</p>
                    <div className='product-container'>
                        <div className='productIMGDescp'>
                            <img src={shoppingCartIMG1} />
                            <span>
                                <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                <p>37,905.00 SEK</p>
                                <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                            </span>
                        </div>
                        <div className='icons'>
                            <img src={editIcon} />
                            <span><CartDeleteModal /></span>
                        </div>
                    </div>

                    <Divider />
                    <div className='product-container'>
                        <div className='productIMGDescp'>
                            <img src={shoppingCartIMG2} />
                            <span>
                                <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                <p>37,905.00 SEK</p>
                                <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                            </span>
                        </div>
                        <div className='icons'>
                            <img src={editIcon} />
                            <img src={deleteIcon} />
                        </div>
                    </div>

                    {/* Product show container */}
                    <div className='productShowContainer'>
                        <p>Color</p>
                        <div className='productColor'>
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                            <img src={shoppingCartIMG2} />
                        </div>
                        <p>Print</p>
                        <div className='productPrint'>
                            <span>No Print</span>
                            <span>1-Color Print</span>
                            <span>1-Color Print</span>
                            <span>2-Color Print</span>
                            <span>3-Color Print</span>
                            <span>4-Color Print</span>
                        </div>
                        <p>Delivery Type</p>
                        <div className='productDelivery productPrint'>
                            <span>Normal Delivery - 0.00 SEK</span>
                            <span>Express Delivery (7 days) - 500.00 SEK</span>
                            <span>Express Delivery (5 days) - 1,200.00 SEK</span>
                        </div>
                        <p>Quantity</p>
                        <div className='productQuantity'>
                            <ol>
                                <li><span>*</span>The minimum amount quantity 25pcs</li>
                                <li><span>*</span>Increase with 25pcs more and get 10% discount</li>
                            </ol>
                            <span>One-size   |   400</span>
                        </div>
                    </div>
                    <Divider style={{ marginTop: "2rem" }} />
                    <div className='cartTotal'>
                        <p>Sub Total</p>
                        <p>11,855.00 SEK</p>
                    </div>
                    <div className='cartTotalBTN'>
                        <button>Continue shopping</button>
                        <button>View shopping cart</button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
export default CartFullDrawer1
