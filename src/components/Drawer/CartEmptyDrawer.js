import React, { useState } from 'react'
import { Drawer } from 'antd'
// img
import Cart from '../../assets/Cart.png'
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartEmptyDrawer = () => {
    const [open, setOpen] = useState(false)
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
                className='cartEmptyDrawer-main'
                // title='What are you looking for?'
                placement='right'
                onClose={onClose}
                open={open}
                headerStyle={{ display: 'none' }}
            >
                <div className='cartEmptyDrawerTitleIcon'>
                    <p>Shopping Cart</p>
                    <span><LiaTimesSolid onClick={onClose} /></span>
                </div>
                <div className='cartEmptyDrawer-container'>
                    <img src={Cart} />
                    <h5>Oh no! It’s empty</h5>
                    <p >You don’t have any product in your cart. Check out our products and buy now.</p>
                    <button>Shop now</button>
                </div>
            </Drawer>
        </>
    )
}
export default CartEmptyDrawer
