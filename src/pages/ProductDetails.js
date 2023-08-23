import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Divider, Drawer, Tabs } from 'antd'
import ellipse from '../assets/productListing/ellipse.png'
import product1 from '../assets/product1.png'
import { AiFillCaretRight, AiOutlineHeart } from 'react-icons/ai'
import arrow_right from '../assets/arrow_right.png'
import { FcCheckmark } from 'react-icons/fc'

// img
import productDetailsIMG1 from '../assets/productDetails/productDetailsIMG1.png'
import productDetailsIMG2 from '../assets/productDetails/productDetailsIMG2.png'
import productDetailsIMG3 from '../assets/productDetails/productDetailsIMG3.png'
import productDetailsIMG4 from '../assets/productDetails/productDetailsIMG4.png'
import productDetailsIMG5 from '../assets/productDetails/productDetailsIMG5.png'
import productDetailsIMG6 from '../assets/productDetails/productDetailsIMG6.png'
import ProductDetailsTable from '../components/Table/ProductDetailsTable'
import TshirtCarousel from '../components/Carousels/TshirtCarousel'

// category browse imgs
import categoryBrowseIMG1 from '../assets/productDetails/categoryBrowseIMG1.png'
import categoryBrowseIMG2 from '../assets/productDetails/categoryBrowseIMG2.png'
import categoryBrowseIMG3 from '../assets/productDetails/categoryBrowseIMG3.png'
import categoryBrowseIMG4 from '../assets/productDetails/categoryBrowseIMG4.png'

// t shirt images for cards
import tshirt1 from '../assets/productListing/tshirt1.png'
import tshirt2 from '../assets/productListing/tshirt2.png'
import tshirt3 from '../assets/productListing/tshirt3.png'
import tshirt4 from '../assets/productListing/tshirt4.png'
import tshirt5 from '../assets/productListing/tshirt5.png'
import tshirt6 from '../assets/productListing/tshirt6.png'
import tshirt7 from '../assets/productListing/tshirt7.png'
import tshirt8 from '../assets/productListing/tshirt8.png'
import tshirt9 from '../assets/productListing/tshirt9.png'
// t shirt logo for cards
import tlogo1 from '../assets/productListing/tlogo1.png'
import tlogo2 from '../assets/productListing/tlogo2.png'
import tlogo3 from '../assets/productListing/tlogo3.png'
import CategoryBrowseCarousel from '../components/Carousels/CategoryBrowseCarousel'
// recently Viewed IMG
import recentlyViewedIMG1 from '../assets/productDetails/recentlyViewedIMG1.png'
import recentlyViewedIMG2 from '../assets/productDetails/recentlyViewedIMG2.png'
import recentlyViewedIMG3 from '../assets/productDetails/recentlyViewedIMG3.png'
import recentlyViewedIMG4 from '../assets/productDetails/recentlyViewedIMG4.png'
import recentlyViewedIMG5 from '../assets/productDetails/recentlyViewedIMG5.png'
import RecentlyViewedCompo from '../components/RecentlyViewedCompo'
// import RecentlyViewed from '../components/Carousels/RecentlyViewed'
import { LiaTimesSolid } from 'react-icons/lia'
// color Drawer IMG
import colorDrawerIMG1 from '../assets/productDetails/colorDrawerIMG1.png'
import colorDrawerIMG2 from '../assets/productDetails/colorDrawerIMG2.png'
import colorDrawerIMG3 from '../assets/productDetails/colorDrawerIMG3.png'
import colorDrawerIMG4 from '../assets/productDetails/colorDrawerIMG4.png'
import colorDrawerIMG5 from '../assets/productDetails/colorDrawerIMG5.png'
import colorDrawerIMG6 from '../assets/productDetails/colorDrawerIMG6.png'
import colorDrawerIMG7 from '../assets/productDetails/colorDrawerIMG7.png'
import ColorDrawerCompo from '../components/ColorDrawerCompo'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


// Color Drawer Data
const colorDrawerData = [
    {
        images: colorDrawerIMG1,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG2,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG3,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG4,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG5,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG6,
        title: 'Azure Blue',
    },
    {
        images: colorDrawerIMG7,
        title: 'Azure Blue',
    },
]
// Recently Viewed Data
const recentlyViewedData = [
    {
        image: recentlyViewedIMG1,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG2,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG3,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG4,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG5,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG2,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG1,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG2,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG3,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG4,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG5,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
    {
        image: recentlyViewedIMG2,
        title: 'Barn T-shirt',
        price: 'From 39.00 SEK',
    },
]

const CategoryBrowseCarouselData = [
    {
        images: categoryBrowseIMG1,
        tags: 't shirt',
    },
    {
        images: categoryBrowseIMG2,
        tags: 't shirt',
    },
    {
        images: categoryBrowseIMG3,
        tags: 't shirt',
    },
    {
        images: categoryBrowseIMG4,
        tags: 't shirt',
    },
]

const tshirtData = [
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt1,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt2,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt3,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt4,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },

    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt5,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt6,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt7,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt8,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },

    {
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        image: tshirt9,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colors: '02 color variants',
    },
]

const onChange = (key) => {
    console.log(key)
}

const items = [
    {
        key: '1',
        label: 'Price Details',
        children: <ProductDetailsTable />,
    },
    {
        key: '2',
        label: 'Product Details',
        children: <ProductDetailsTable />,
    },
    {
        key: '3',
        label: 'Print Details',
        children: <ProductDetailsTable />,
    },
    {
        key: '4',
        label: 'FAQ',
        children: <ProductDetailsTable />,
    },
]

const ProductDetails = () => {

    const [openColor, setOpenColor] = useState(false)
    const showColorDrawer = () => {
        setOpenColor(true)
    }
    const onCloseColor = () => {
        setOpenColor(false)
    }

    const [openPrint, setOpenPrint] = useState(false)
    const showPrintDrawer = () => {
        setOpenPrint(true)
    }
    const onClosePrint = () => {
        setOpenPrint(false)
    }

    const [openDelivery, setOpenDelivery] = useState(false)
    const showDeliveryDrawer = () => {
        setOpenDelivery(true)
    }
    const onCloseDelivery = () => {
        setOpenDelivery(false)
    }

    const [openContact, setOpenContact] = useState(false)
    const showContactDrawer = () => {
        setOpenContact(true)
    }
    const onCloseContact = () => {
        setOpenContact(false)
    }


    return (
        <Layout active={'product-details'}>
            <div className='product-detail-container'>
                <Divider></Divider>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>PRINT WEAR</p>
                    <img src={ellipse} />
                    <p className='grayText-proctuctListing'>T-SHIRTS</p>
                    <img src={ellipse} />
                    <p className='grayText-proctuctListing'>Hoodie with kangaroo pocket | Hooded Sweat</p>
                </div>
                <div className='productContainer'>
                    <div className='productIMG'>
                        <img src={product1} />
                    </div>
                    <div className='productDetails'>
                        <div className='tagsIcons'>
                            <div className='productDetails-tags'>
                                <p className='toptags'>Bestseller</p>
                                <p className='toptags'>Cheap jerseys</p>
                            </div>
                            <div>
                                <AiOutlineHeart />
                            </div>
                        </div>
                        <div className='productDetails-text'>
                            <p className='productDetails-brands'>Fruit of the Loom®</p>
                            <h5>Hoodie with kangaroo pocket | Hooded Sweat</h5>
                            <p className='productDetails-article'>Article #622080</p>
                            <p className='productDetails-price'>
                                <span>196.00 SEK</span> per piece
                            </p>
                        </div>
                        <div className='productDetails-drawer'>
                            <div className='productDetails-text' onClick={showColorDrawer}>
                                <div className='productDetails-heading'>
                                    <div>
                                        <span className='serialNum'>01</span>{' '}
                                    </div>
                                    <div>
                                        <p className='productDetails-heading1'>Color</p>
                                        <p className='productDetails-subheading'>
                                            Select the preferred color from the list
                                        </p>
                                    </div>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer className='color-drawer' placement='right' open={openColor}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Color</p>
                                    <LiaTimesSolid onClick={onCloseColor} />
                                </div>
                                <div className='ColorDrawerData'>
                                    {colorDrawerData?.map((item, index) => (
                                        <div className='ColorDrawer' key={index}>
                                            <ColorDrawerCompo images={item.images} title={item.title} />

                                        </div>
                                    ))}
                                    <button className='drawerBTN' src={arrow_right}>
                                        Confirm selection <img src={arrow_right} />
                                    </button>
                                </div>
                            </Drawer>
                            <div className='productDetails-text' onClick={showPrintDrawer}>
                                <div className='productDetails-heading'>
                                    <span className='serialNum'>02</span>{' '}
                                    <p className='productDetails-heading1'>Print</p>
                                    <p className='productDetails-subheading'>
                                        Select the preferred color from the list
                                    </p>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer size='default' className='print-drawer' placement='right' open={openPrint}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Print</p>
                                    <LiaTimesSolid onClick={onClosePrint} />
                                </div>
                                <div className='printDrawer-data'>
                                    <div>
                                        <p>No Print</p>
                                        <p>1-Color Print</p>
                                        <p>2-Color Print<FcCheckmark /></p>
                                        <p>3-Color Print</p>
                                        <p>4-Color Print</p>
                                    </div>
                                    <button className='drawerBTN'>
                                        Confirm selection <img src={arrow_right} />
                                    </button>
                                </div>
                            </Drawer>
                            <div className='productDetails-text' onClick={showDeliveryDrawer}>
                                <div className='productDetails-heading '>
                                    <span className='serialNum'>03</span>{' '}
                                    <p className='productDetails-heading1'>Delivery Type</p>
                                    <p className='productDetails-subheading'>
                                        Select the preferred color from the list
                                    </p>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer size='default' className='delivery-drawer' placement='right' open={openDelivery}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Delivery Type</p>
                                    <LiaTimesSolid onClick={onCloseDelivery} />
                                </div>
                                <div className='deliveryDrawer-data'>
                                    <div>
                                        <p>
                                            Normal Delivery <span>0.00 SEK</span>
                                        </p>
                                        <p>
                                            Express Delivery (7 days)<span>500.00 SEK</span>
                                            <FcCheckmark />
                                        </p>
                                        <p>
                                            Express Delivery (5 days)<span>1,200.00 SEK</span>
                                        </p>
                                    </div>
                                    <button className='drawerBTN'>
                                        Confirm selection
                                        <img src={arrow_right} />
                                    </button>
                                </div>
                            </Drawer>
                            <div className='productDetails-text'>
                                <div className='productDetails-heading'>
                                    <span className='serialNum'>04</span>{' '}
                                    <p className='productDetails-heading1'>Quantity</p>
                                    <p className='productDetails-subheading'>
                                        Select the preferred color from the list
                                    </p>
                                </div>
                                <AiFillCaretRight />
                            </div>

                            <div className='productDetails-drawer-price'>
                                <div className='priceTotal'>
                                    <p>Total price</p>
                                    <p>Price specifications</p>
                                </div>
                                <div className='priceAmount'>
                                    <p>00.00 SEK</p>
                                    <p>Incl. VAT: 00.00 SEK</p>
                                </div>
                            </div>

                            <div className='productDetailsBTNs'>
                                <button onClick={showContactDrawer}>Contact</button>
                                <Drawer className='contactus-main' size='default' placement='right' open={openContact}>
                                    <div>
                                        <div className='ColorDrawer-closeBTN'>
                                            <p>Contact Us</p>
                                            <LiaTimesSolid onClick={onCloseContact} />
                                        </div>
                                        <div className='contactus-data'>
                                            <form>
                                                <label htmlFor='name'>
                                                    Name <span>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    id='fname'
                                                    name='name'
                                                    placeholder='Enter your full name'
                                                />

                                                <label htmlFor='email'>
                                                    Email <span>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    id='email'
                                                    name='email'
                                                    placeholder='Enter your ful  email'
                                                />

                                                <label htmlFor='message'>
                                                    Message <span>*</span>
                                                </label>
                                                <textarea
                                                    id='message'
                                                    name='message'
                                                    placeholder='Your message..'
                                                ></textarea>
                                            </form>
                                            <button className='drawerBTN'>
                                                Submit
                                                <img src={arrow_right} />
                                            </button>
                                        </div>
                                    </div>
                                </Drawer>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='imageSlider'>
                    <img src={productDetailsIMG1} />
                    <img src={productDetailsIMG2} />
                    <img src={productDetailsIMG3} />
                    <img src={productDetailsIMG4} />
                    <img src={productDetailsIMG5} />
                    <img src={productDetailsIMG6} />
                </div>
                <div className='description'>
                    <p>Description</p>
                    <p>
                        Hoodie with kangaroo pocket. A hooded sweatshirt with an excellent fit! This shirt is
                        made of 80% cotton and 20% polyester. The cotton is so-called Belcoro® yarn, which gives
                        the sweater a soft feel and good quality. Belcoro® yarn also makes the sweater optimal
                        for printing, but can of course also be worn without printing. The shirt&apos;s waist,
                        neck and sleeve elastics are made of Lycra® cotton, which makes it shape-resistant. This
                        hood has a drawstring that makes the hood adjustable and a continuous kangaroo pocket
                        that makes it both modern and practical. Perfect for school classes, associations and in
                        the spare time who need a cheap hoodie.
                        <br />
                        <br />
                        Printing and profiling can be purchased separately, if there is interest just contact us
                        for a free quote.
                    </p>
                </div>
                {/* table */}
                <div className='productDetail-table'>
                    <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
                </div>
                <div className='tableDiscp'>
                    <p>
                        All prices are shown excluding VAT. Stencil is added with <span>395.00 SEK</span> per
                        printed color. Embroidery cards are added for <span>695.00 SEK</span>{' '}
                    </p>
                </div>
                {/* t shirts carousel section 1 */}
                <div className='tshirtCards'>
                    <h2>Articles from same series</h2>
                </div>
                <div className=''>
                    <TshirtCarousel carouselData={tshirtData} />
                </div>
                {/* Categories section */}
                <div className='categoryBrowse'>
                    <h2>Related Categories to browse</h2>
                    <div className='categoryBrowse-main'>
                        <div className='categoryBrowseIMG'>
                            <img src={categoryBrowseIMG1} />
                            <p className='tags modelTAG'>T-shirt</p>
                        </div>
                        <div className='categoryBrowseIMG'>
                            <img src={categoryBrowseIMG2} />
                            <p className='tags modelTAG'>Sweatshirts</p>
                        </div>
                        <div className='categoryBrowseIMG'>
                            <img src={categoryBrowseIMG3} />
                            <p className='tags modelTAG'>Hoodies</p>
                        </div>
                        <div className='categoryBrowseIMG'>
                            <img src={categoryBrowseIMG4} />
                            <p className='tags modelTAG'>Jackets</p>
                        </div>
                    </div>
                </div>
                {/* Categories Mobile Carousel */}
                <div className='CategoryBrowseCarousel-mobile'>
                    <CategoryBrowseCarousel CategoryBrowseCarouselData={CategoryBrowseCarouselData} />
                </div>
                <div className='reacentlyViewed'>
                    <h2>Recently Viewed Articles</h2>
                    <div>

                        <Carousel responsive={responsive}>
                            {recentlyViewedData?.map((item, index) => (
                                <RecentlyViewedCompo key={index} image={item.image} title={item.title} price={item.price} />
                            ))}
                        </Carousel>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails
