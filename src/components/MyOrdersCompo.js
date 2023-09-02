import React, { useState } from 'react';
import { Divider, Drawer } from 'antd';
import { LiaTimesSolid } from 'react-icons/lia';
import arrow_right from '../assets/arrow_right.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'


const MyOrdersCompo = ({
  completeBTN,
  orderBTN,
  orderPlace,
  moreIcon,
  orderIMG,
  productTitle,
  productSubtitle,
  productQuantity,
  orderPriceTitles,
  orderPrice,
  deliveryTitle,
  deliveryDate,
}) => {
  const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
  return (
    <div className='MyOrdersCompo' onClick={showDrawer}>
      <div className='MyOrdersCompo-topSection'>
        <div className='leftBTNS'>
          <div>{completeBTN}</div>
          <div>{orderBTN}</div>
        </div>
        <div className='rightDateIcon'>
          <div>{orderPlace}</div>
          <img src={moreIcon}></img>
        </div>
      </div>
      <div className='MyOrdersCompo-bottomSection'>
        <div className='MyOrdersCompo-imgTitle'>
          <img src={orderIMG}></img>
          <div className='leftProductDetails'>
            <div>{productTitle}</div>
            <div>{productSubtitle}</div>
            <div>{productQuantity}</div>
          </div>
        </div>
        <div className='MyOrdersCompo-priceDelivery'>
          <div className='MyOrdersCompo-price'>
            <div>{orderPriceTitles}</div>
            <div>{orderPrice}</div>
          </div>
          <div className='MyOrdersCompo-delivery'>
            <div>{deliveryTitle}</div>
            <div>{deliveryDate}</div>
          </div>
        </div>
      </div>
      <Drawer width={'650px'} className='orderDetailsDrawer' placement="right" onClose={onClose} open={open}>
        <div className='ColorDrawer-closeBTN'>
          <p>Order Details</p>
          <div className='closeIconSearch'>
            <LiaTimesSolid onClick={onClose}/>
          </div>
        </div>
        <div className='orderDrawer'>
          <div className='orderTopSection'>
            <div className='orderLeftBTNs'>
              <p>ACTIVE</p>
              <p>Order ID - 51402</p>
            </div>
            <div className='orderRightDate'>
              <p>Order placed on - <span>Tue, 30 May 2023 </span></p>
            </div>
          </div>
          <p className='orderHeadings'>Our Summary</p>
          <div className='summarySection'>
            <img src={orderIMG}></img>
            <div className='orderProductDetails'>
              <div>{productTitle}</div>
              <div>{productSubtitle}</div>
              <div>{productQuantity}</div>
            </div>
          </div>
          <div className='productSizeBTNs'>
            <p>S | 25</p>
            <p>M | 25</p>
            <p>L | 50</p>
            <p>SL | 100</p>
          </div>
          <Divider />
          <p className='orderHeadings'>Shipping details</p>
          <div className='shippingSection'>
            <div className='orderLeftText'>
              <p>Shipping address</p>
              <p>Estimated delivery</p>
            </div>
            <div className='orderRightText'>
              <p>Morvall Färilavägen 66, Ljusdal 827 00</p>
              <p>Mon, 05 Jun 2023</p>
            </div>
          </div>
          <Divider />
          <p className='orderHeadings'>Price details</p>
          <div className='orderPrice'>
            <div className='priceLeftText'>
              <p>Item total</p>
              <p>Shipping charges</p>
              <p>Sub Total</p>
              <p>Tax (25%)</p>
              <p>Tax (25%)</p>
            </div>
            <div className='priceRightText'>
              <p>1,04,520.00 SEK</p>
              <p>500.00 SEK</p>
              <p>1,05,020.00 SEK</p>
              <p>26,255.00 SEK</p>
              <p>1,31,275.00 SEK</p>
            </div>
          </div>
          <Divider />
          <div className='ordersBTN'>
            <button>Download invoice<img src={arrow_right} /></button>
            <button>Cancel order<img src={arrowRightGreen} /></button>
          </div>
        </div>
      </Drawer>
    </div>

  )
}

export default MyOrdersCompo
