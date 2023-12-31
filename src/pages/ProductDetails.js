import React, { useState, useEffect } from 'react'
import Layout from '../layout/Layout'
import { Drawer, Tabs } from 'antd'
import product1 from '../assets/product1.png'
import ellipse from '../assets/productListing/ellipse.png'
import arrow_right from '../assets/arrow_right.png'
import greenTickMark from '../assets/greenTickMark.png'
import { AiFillCaretRight, AiOutlineHeart } from 'react-icons/ai'
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

import colorsWheel from '../assets/colorsWheel.png'
import heartWhiteIcon from '../assets/heartWhiteIcon.png'
import infoIcon from '../assets/infoIcon.png'
import local_shipping from '../assets/local_shipping.png'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Recently Viewed Articles carousel responsive
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

// Color Drawer Data
const colorDrawerData = [
    {
        images: colorDrawerIMG1,
        title: 'Azure Blue',
        color: 'blue'
    },
    {
        images: colorDrawerIMG2,
        title: 'Black',
        color: 'black'
    },
    {
        images: colorDrawerIMG3,
        title: 'Bottle Green',
        color: 'green'
    },
    {
        images: colorDrawerIMG4,
        title: 'Burgundy',
        color: 'burgundy'
    },
    {
        images: colorDrawerIMG5,
        title: 'Classic Olive',
        color: 'classicOlive'
    },
    {
        images: colorDrawerIMG6,
        title: 'Dark Heather Gray',
        color: 'gray'
    },
    {
        images: colorDrawerIMG7,
        title: 'Deep Navy',
        color: 'navy'
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
// Category Browse Carousel Data
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
// tshirt data
const tshirtData = [
    {
        id: 1,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt1,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 2,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt2,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 3,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt3,
        logo: tlogo1,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 4,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt4,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },

    {
        id: 5,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt5,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 6,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt6,
        logo: tlogo2,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 7,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt7,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
    {
        id: 8,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt8,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },

    {
        id: 9,
        title: 'Cheap t shirt',
        subtitle:
            'ATTENTION! This promotional item can only be purchased without printing. Reservation for final sale! If any color or..',
        price: 'From 36.55 SEK',
        heartWhiteIcon: heartWhiteIcon,
        image: tshirt9,
        logo: tlogo3,
        toptags: ['best seller', 'cheap t-shirt'],
        colorsWheel: colorsWheel,
        colors: '02 color variants',
    },
]
localStorage.setItem('tshirtData', JSON.stringify(tshirtData));



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

    // state for green tick marks
    const [productColor, setProductColor] = useState(null)
    const [productPrint, setProductPrint] = useState(null)

    // small tick mark state
    const [deliveryType, setDeliveryType] = useState(null)
    // const [printType, setPrintType] = useState(null)
    const [colorType, setcolorType] = useState(null)

    // main product image change state
    const [activeIMG, setActiveIMG] = useState(product1)
    const onIMGClick = (image) => {
        setActiveIMG(image)
    }

    // Open and Close Drawer function
    const [openColor, setOpenColor] = useState(false)
    const showColorDrawer = () => {
        setOpenColor(true)
    }
    const onCloseColor = () => {
        setOpenColor(false)
    }
    // openPrint
    const [openPrint, setOpenPrint] = useState(false)
    const showPrintDrawer = () => {
        setOpenPrint(true)
    }
    const onClosePrint = () => {
        setOpenPrint(false)
    }
    // openDelivery
    const [openDelivery, setOpenDelivery] = useState(false)
    const showDeliveryDrawer = () => {
        setOpenDelivery(true)
    }
    const onCloseDelivery = () => {
        setOpenDelivery(false)
    }
    // openContact
    const [openContact, setOpenContact] = useState(false)
    const showContactDrawer = () => {
        setOpenContact(true)
    }
    const onCloseContact = () => {
        setOpenContact(false)
    }
    // quantity container show state
    const [isVisibleQuantity, setVisibleQuantity] = useState(false);
    const QuantityVisible = () => {
        setVisibleQuantity(prevState => !prevState);
    };

    // size button state
    const [sizeBTN, setSizeBTN] = useState([]); // state variable for the selected sizes
    const sizeOnChange = (size) => { // function to handle size selection
        if (sizeBTN.includes(size) == true) { // if the size is already selected
            let tempSizeBtn = sizeBTN?.filter((item) => item !== size) // remove the size from the selected sizes
            setSizeBTN([...tempSizeBtn]) // update the state variable with the new selected sizes
        } else { // if the size is not already selected
            setSizeBTN([...sizeBTN, size]) // add the size to the selected sizes
        }
    };

    // print type selection 
    const [printType, setPrintType] = useState(null);
    const printTypes = [
        { type: 'No-Print', label: 'No Print' },
        { type: '1-Color-Print', label: '1-Color Print' },
        { type: '2-Color-Print', label: '2-Color Print' },
        { type: '3-Color-Print', label: '3-Color Print' },
        { type: '4-Color-Print', label: '4-Color Print' },
    ];

    useEffect(() => {
        console.log('sizeBTN length', sizeBTN.length)
        console.log('sizeBTN', sizeBTN)
    }, [sizeBTN])


    return (
        <Layout active={'product-details'}>
            <div className='product-detail-container'>
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
                        <img src={activeIMG} />
                    </div>
                    <div className='productDetails'>
                        <div className='tagsIcons'>
                            <div className='productDetails-tags'>
                                <p className='toptags'>Bestseller</p>
                                <p className='toptags'>Cheap jerseys</p>
                            </div>
                            <div >
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
                            <p>This is the text you want to select.</p>
                        </div>
                        <div className='productDetails-drawer'>
                            <div className='productDetails-text' onClick={showColorDrawer}>
                                <div className='productDetails-heading'>
                                    <div>
                                        {productColor !== null ? (
                                            <img src={greenTickMark} className='greenMark'></img>
                                        ) : (
                                            <span className='serialNum'>01</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className='productDetails-heading1'>Color</p>
                                        <p className='productDetails-subheading'>
                                            Select the preferred color from the list
                                            {colorType !== null && <span className='selectedColor'>{colorType}</span>
                                            }
                                        </p>
                                    </div>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer width='425' className='color-drawer' placement='right' open={openColor}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Color</p>
                                    <LiaTimesSolid onClick={onCloseColor} />
                                </div>
                                <div className='ColorDrawerData'>
                                    {colorDrawerData?.map((item, index) => (
                                        <div className='ColorDrawer' key={index}>
                                            <ColorDrawerCompo
                                                images={item?.images}
                                                title={item?.title}
                                                color={item?.color}
                                                setProductColor={setProductColor}
                                                colorType={colorType}
                                                setcolorType={setcolorType}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className='drawerBTN' src={arrow_right}>
                                    Confirm selection <img src={arrow_right} />
                                </button>
                            </Drawer>
                            <div className='productDetails-text' onClick={showPrintDrawer}>
                                <div className='productDetails-heading'>
                                    <div>
                                        {productPrint !== null ? (
                                            <img src={greenTickMark} className='greenMark'></img>
                                        ) : (
                                            <span className='serialNum'>02</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className='productDetails-heading1'>Print</p>
                                        <p className='productDetails-subheading'>
                                            Select the type of print you want in your product
                                            {printType !== null && <span className='selectedColor'>{printType}</span>}
                                        </p>
                                    </div>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer width='425' className='print-drawer' placement='right' open={openPrint}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Print</p>
                                    <LiaTimesSolid onClick={onClosePrint} />
                                </div>
                                <div className='printDrawer-data'>
                                    <div onClick={() => setProductPrint('')}
                                    >
                                        <div>
                                            {printTypes.map((item) => (
                                                <p key={item.type} onClick={() => setPrintType(item.type)}>
                                                    {item.label} {printType === item.type ? <FcCheckmark /> : ''}
                                                </p>
                                            ))}
                                        </div>ٖ
                                        {/* <p onClick={() => setPrintType('noPrint')} >No Print {printType === 'noPrint' ? <FcCheckmark /> : ''}</p>
                                        <p onClick={() => setPrintType('1color')} >1-Color Print {printType === '1color' ? <FcCheckmark /> : ''}</p>
                                        <p onClick={() => setPrintType('2color')} >2-Color Print {printType === '2color' ? <FcCheckmark /> : ''}</p>
                                        <p onClick={() => setPrintType('3color')} >3-Color Print {printType === '3color' ? <FcCheckmark /> : ''}</p>
                                        <p onClick={() => setPrintType('4color')} >4-Color Print {printType === '4color' ? <FcCheckmark /> : ''}</p> */}
                                    </div>
                                    <button className='drawerBTN'>
                                        Confirm selection <img src={arrow_right} />
                                    </button>
                                </div>
                            </Drawer>
                            <div className='productDetails-text' onClick={showDeliveryDrawer}>
                                <div className='productDetails-heading '>
                                    <div>
                                        {deliveryType !== null ? (
                                            <img src={greenTickMark} className='greenMark'></img>
                                        ) : (
                                            <span className='serialNum'>03</span>)}
                                    </div>
                                    <div>
                                        <p className='productDetails-heading1'>Delivery Type</p>
                                        <p className='productDetails-subheading'>
                                            Select the preferred delivery time
                                            {deliveryType !== null && <span className='selectedColor'>{deliveryType}</span>}

                                        </p>
                                    </div>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            <Drawer width='425' className='delivery-drawer' placement='right' open={openDelivery}>
                                <div className='ColorDrawer-closeBTN'>
                                    <p>Delivery Type</p>
                                    <LiaTimesSolid onClick={onCloseDelivery} />
                                </div>
                                <div className='deliveryDrawer-data'>
                                    <div>
                                        <p onClick={() => setDeliveryType('Normal Delivery')}>
                                            Normal Delivery <span>0.00 SEK {deliveryType === 'Normal Delivery' ? <FcCheckmark /> : ''}</span>
                                        </p>
                                        <p onClick={() => setDeliveryType('Express Delivery (7 days)')}>
                                            Express Delivery (7 days)
                                            <span>
                                                500.00 SEK{deliveryType === 'Express Delivery (7 days)' ? <FcCheckmark /> : ''}
                                            </span>
                                        </p>
                                        <p onClick={() => setDeliveryType('Express Delivery (5 days)')}>
                                            Express Delivery (5 days)<span>1,200.00 SEK{deliveryType === 'Express Delivery (5 days)' ? <FcCheckmark /> : ''}</span>
                                        </p>
                                    </div>
                                    <button className='drawerBTN'>
                                        Confirm selection
                                        <img src={arrow_right} />
                                    </button>
                                </div>
                            </Drawer>
                            <div className='productDetails-text'>
                                <div className='productDetails-heading' onClick={QuantityVisible}>
                                    <div>
                                        {sizeBTN.length > 0 ? (
                                            <img src={greenTickMark} className='greenMark'></img>
                                        ) : (
                                            <span className='serialNum'>04</span>)}
                                    </div>
                                    <div>
                                        <p className='productDetails-heading1'>Quantity</p>
                                        <p className='productDetails-subheading'>Select the number of products you want</p>
                                    </div>
                                </div>
                                <AiFillCaretRight />
                            </div>
                            {isVisibleQuantity && (<div className='quantitySelect'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li><span style={{ color: 'red' }}>*</span>  The minimum amount quantity 25pcs</li>
                                    <li><span style={{ color: 'red' }}>*</span>  Increase with 25pcs more and get 10% discount</li>
                                </ul>
                                <span className='sizeBTN' >
                                    <p onClick={() => sizeOnChange('xs')} style={{ border: sizeBTN.includes('xs') == true ? '1px solid #32CD32' : '' }}>XS</p>
                                    <p onClick={() => sizeOnChange('s')} style={{ border: sizeBTN.includes('s') == true ? '1px solid #32CD32' : '' }}>S  |   25</p>
                                    <p onClick={() => sizeOnChange('m')} style={{ border: sizeBTN.includes('m') == true ? '1px solid #32CD32' : '' }}>M  |   25</p>
                                    <p onClick={() => sizeOnChange('l')} style={{ border: sizeBTN.includes('l') == true ? '1px solid #32CD32' : '' }}>L  |   25</p>
                                    <p onClick={() => sizeOnChange('xl')} style={{ border: sizeBTN.includes('xl') == true ? '1px solid #32CD32' : '' }}>XL   |  25</p>
                                    <p onClick={() => sizeOnChange('xll')} style={{ border: sizeBTN.includes('xll') == true ? '1px solid #32CD32' : '' }}>XXL</p>
                                </span>
                            </div>
                            )}
                            <div className='productDetails-drawer-price'>
                                <div className='priceTotal'>
                                    <p>Total price</p>
                                    <p>Price specifications</p>
                                </div>
                                <div className='priceAmount'>
                                    <p>37,905.00 SEK</p>
                                    <p>Incl. VAT: 245.00 SEK</p>
                                </div>
                            </div>
                            <div className='shippingInfoBox'>
                                <p><img src={local_shipping} />Express Delivery (7 days) - Latest by <span>Mon, 05 Jun 2023</span></p>
                                <p><img src={infoIcon} />You will upload your files and print instructions in the cart</p>
                            </div>

                            <div className='productDetailsBTNs'>
                                <button onClick={showContactDrawer}>Contact</button>
                                <Drawer width='425' className='contactus-main' placement='right' open={openContact}>
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
                {/* image Slider */}
                <div className='imageSlider'>
                    <img
                        src={productDetailsIMG1}
                        style={{ border: activeIMG == productDetailsIMG1 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG1)}
                    />
                    <img
                        src={productDetailsIMG2}
                        style={{ border: activeIMG == productDetailsIMG2 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG2)}
                    />
                    <img
                        src={productDetailsIMG3}
                        style={{ border: activeIMG == productDetailsIMG3 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG3)}
                    />
                    <img
                        src={productDetailsIMG4}
                        style={{ border: activeIMG == productDetailsIMG4 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG4)}
                    />
                    <img
                        src={productDetailsIMG5}
                        style={{ border: activeIMG == productDetailsIMG5 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG5)}
                    />
                    <img
                        src={productDetailsIMG6}
                        style={{ border: activeIMG == productDetailsIMG6 ? '2px solid #32CD32' : 'none' }}
                        onClick={() => onIMGClick(productDetailsIMG6)}
                    />
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
                    <Tabs defaultActiveKey='1' className='custom-tabs' items={items} onChange={onChange} />
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
                    <div className='backgroungIMG'>
                        <Carousel responsive={responsive}>
                            {recentlyViewedData?.map((item, index) => (
                                <RecentlyViewedCompo
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default ProductDetails
