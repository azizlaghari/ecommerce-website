import React, { useState } from 'react'
import { Divider, Drawer } from 'antd'
// img
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import shoppingCartIMG1 from '../../assets/shoppingCartIMG1.png'
import shoppingCartIMG2 from '../../assets/shoppingCartIMG2.png'
import editIcon from '../../assets/edit.png'
import dargGreenTickMark from '../../assets/dargGreenTickMark.png'
import cancelledIcon from '../../assets/cancelledIcon.png'
import CartDelPop from '../Popconfirm/CartDelPop'

const CartFullDrawer1 = () => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const [isProductVisible, setIsProductVisible] = useState(false)
    console.log('isProductVisible :', isProductVisible)
    const toggle = () => {
        setIsProductVisible((prevState) => !prevState)
    }

    const [iconOpen, setIconOpen] = useState(false)

    //   Print btn seletion state & function toggle
    const [printBTN, setPrintBTN] = useState([]) // state variable for the selected sizes
    const printOnChange = (size) => {
        // function to handle size selection
        if (printBTN.includes(size) == true) {
        console.log('printBTN :', printBTN);
            // if the size is already selected
            let tempSizeBtn = printBTN?.filter((item) => item !== size) // remove the size from the selected sizes
            console.log('tempSizeBtn :', tempSizeBtn);
            setPrintBTN([...tempSizeBtn]) // update the state variable with the new selected sizes
        } else {
            // if the size is not already selected
            setPrintBTN([...printBTN, size]) // add the size to the selected sizes
        }
    }

    //   Delivery btn seletion state & function toggle
    const [DeliveryBTN, setDeliveryBTN] = useState([]) // state variable for the selected sizes
    const DeliveryOnChange = (size) => {
        // function to handle size selection
        if (DeliveryBTN.includes(size) == true) {
            // if the size is already selected
            let tempDeliveryBtn = DeliveryBTN?.filter((item) => item !== size) // remove the size from the selected sizes
            setDeliveryBTN([...tempDeliveryBtn]) // update the state variable with the new selected sizes
        } else {
            // if the size is not already selected
            setDeliveryBTN([...DeliveryBTN, size]) // add the size to the selected sizes
        }
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
                width='900'
            >
                <div className='CartFullDrawer1TitleIcon'>
                    <p>Shopping Cart</p>
                    <span>
                        <LiaTimesSolid onClick={onClose} />
                    </span>
                </div>
                <div className='CartFullDrawer1-container'>
                    <p>
                        There are <span>02 items</span> in your cart
                    </p>
                    <div className='product-container'>
                        <div className='productIMGDescp'>
                            <img src={shoppingCartIMG1} />
                            <span>
                                <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                <p>37,905.00 SEK</p>
                                <p>Azure Blue | 2-Color Print | Express Delivery (7 days)</p>
                            </span>
                        </div>
                        <div className='iconsEditDelete'>
                            <img src={editIcon} />
                            <span>
                                <CartDelPop />
                            </span>
                        </div>
                    </div>

                    <Divider />
                    <div
                        className='product-container'
                        onClick={() => {
                            setIconOpen(!iconOpen)
                            toggle()
                        }}
                    >
                        <div className='productIMGDescp'>
                            <img src={shoppingCartIMG2} />
                            <span>
                                <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                <p>37,905.00 SEK</p>
                                <p>Azure Blue | 2-Color Print | Express Delivery (7 days)</p>
                            </span>
                        </div>
                        <div className='iconsEditDelete'>
                            {iconOpen === true ? (
                                <img src={dargGreenTickMark} className='greenMark'></img>
                            ) : (
                                <img src={editIcon} />
                            )}
                            {iconOpen === true ? (
                                <img src={cancelledIcon} className='greenMark'></img>
                            ) : (
                                <span>
                                    <CartDelPop />
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Product show container */}
                    {isProductVisible && (
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
                                {/* <span
                                    onClick={() => printOnChange('noPrint')}
                                    style={{
                                        border: printBTN.includes('noPrint') == true ? '1px solid #32CD32' : '',
                                    }}
                                >
                                    No Print
                                </span>
                                <span
                                    onClick={() => printOnChange('1color')}
                                    style={{ border: printBTN.includes('1color') == true ? '1px solid #32CD32' : '' }}
                                >
                                    1-Color Print
                                </span>
                                <span
                                    onClick={() => printOnChange('2color')}
                                    style={{ border: printBTN.includes('2color') == true ? '1px solid #32CD32' : '' }}
                                >
                                    2-Color Print
                                </span>
                                <span
                                    onClick={() => printOnChange('3color')}
                                    style={{ border: printBTN.includes('3color') == true ? '1px solid #32CD32' : '' }}
                                >
                                    3-Color Print
                                </span>
                                <span
                                    onClick={() => printOnChange('4color')}
                                    style={{ border: printBTN.includes('4color') == true ? '1px solid #32CD32' : '' }}
                                >
                                    4-Color Print
                                </span> */}
                                {['No Print', '1-Color Print', '2-Color Print', '3-Color Print', '4-Color Print'].map((text, index) => (
                                    <span
                                        key={index}
                                        onClick={() => printOnChange(index === 0 ? 'noPrint' : `${index}color`)}
                                        style={{ border: printBTN.includes(index === 0 ? 'noPrint' : `${index}color`) ? '1px solid #32CD32' : '' }}
                                    >
                                        {text}
                                    </span>
                                ))}
                            </div>
                            <p>Delivery Type</p>
                            <div className='productDelivery productPrint'>
                                <span
                                    onClick={() => DeliveryOnChange('Normal')}
                                    style={{
                                        border: DeliveryBTN.includes('Normal') == true ? '1px solid #32CD32' : '',
                                    }}
                                >
                                    Normal Delivery - 0.00 SEK
                                </span>
                                <span
                                    onClick={() => DeliveryOnChange('7days')}
                                    style={{
                                        border: DeliveryBTN.includes('7days') == true ? '1px solid #32CD32' : '',
                                    }}
                                >
                                    Express Delivery (7 days) - 500.00 SEK
                                </span>
                                <span
                                    onClick={() => DeliveryOnChange('5days')}
                                    style={{
                                        border: DeliveryBTN.includes('5days') == true ? '1px solid #32CD32' : '',
                                    }}
                                >
                                    Express Delivery (5 days) - 1,200.00 SEK
                                </span>
                            </div>
                            <p>Quantity</p>
                            <div className='productQuantity'>
                                <ol>
                                    <li>
                                        <span>*</span>The minimum amount quantity 25pcs
                                    </li>
                                    <li>
                                        <span>*</span>Increase with 25pcs more and get 10% discount
                                    </li>
                                </ol>
                                <span>One-size | 400</span>
                            </div>
                        </div>
                    )}
                    <Divider style={{ marginTop: '2rem' }} />
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
