import React, { useState } from 'react'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import uploadICON from '../assets/upload.png'
import colorsWheel from '../assets/colorsWheel.png'
import shoppingCartIMG1 from '../assets/shoppingCartIMG1.png'
import shoppingCartIMG2 from '../assets/shoppingCartIMG2.png'
import info from '../assets/info.png'
import { Divider, Radio, Select, Tag, Tooltip, Upload, message } from 'antd'
import { LiaTimesSolid } from 'react-icons/lia'

const PrintInformation = () => {
    // state of file radio btn
    const [fileValue, setFileValue] = useState('');
    const onChangeFile = (e) => {
        console.log('radio checked', e.target.value);
        setFileValue(e.target.value);
    };
    // state of color radio btn
    const [colorValue, setColorValue] = useState('');
    const onChangeColor = (e) => {
        console.log('radio checked', e.target.value);
        setColorValue(e.target.value);
    };
    // tags prevent Default
    const preventDefault = (e) => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
    };
    // Color selector
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    // product customization tab open/close state
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {
        setIsVisible(prevState => !prevState);
    };

    // upload box
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <>
            <Layout active='print-information'>
                <div className='text-proctuctListing'>
                    <p className='greenText-proctuctListing'>HOME</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>SHOPPING CART</p>
                    <img src={ellipse} />
                    <p className='greenText-proctuctListing'>CUSTAMIZE</p>
                </div>
                <div className='PrintInformation'>
                    <div className='topHeading'>
                        <h6>Provide Printing Information</h6>
                        <button>Continue shopping<img src={arrowRightGreen} /></button>
                    </div>
                    <div className='productCardSummary'>
                        <div className='leftProductCard'>
                            <div className='productCard' onClick={toggle}>
                                <div className='productIMGDetails'>
                                    <img src={shoppingCartIMG1} />
                                    <div className='productDetails'>
                                        <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                        <p>350 items</p>
                                        <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                                    </div>
                                </div>
                                <div className='productPrice'>
                                    <p>37,905.00 SEK</p>
                                </div>
                            </div>
                            {isVisible && (
                                <div className='productCustomization'>
                                    <div className='CustomizeDetails'>
                                        <p>Customize Details</p>
                                        <div className='CustomizeDetailsText'>
                                            <div>
                                                <p>Print File
                                                    <Tooltip title="File info">
                                                        <img src={info} />
                                                    </Tooltip>
                                                </p>
                                                <div className='summaryRadioBTN'>
                                                    <Radio.Group onChange={onChangeFile} value={fileValue}>
                                                        <Radio value={'upload-file-later'}>Upload my print files later</Radio>
                                                        <Radio value={'upload-file-now'}>Upload my print files now</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            <div className='fileUploadField'>
                                                <div className='uploadBox'>
                                                    <Upload className='upload' {...props}>
                                                        <div> <img src={uploadICON} /><p>Select files to upload (the file size should not exceed 5.0MB)</p>
                                                        </div>
                                                    </Upload>
                                                </div>
                                                <div className='antDtags'>
                                                    <span>
                                                        <Tag closeIcon onClose={preventDefault}>
                                                            logotype.pdf (1.0 MB)
                                                            <LiaTimesSolid />
                                                        </Tag>
                                                    </span>
                                                    <span>
                                                        <Tag closeIcon onClose={preventDefault}>
                                                            shape-one.eps (2.7 MB)
                                                            <LiaTimesSolid />
                                                        </Tag>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='CustomizeDetailsText'>
                                            <p>Print Color
                                                <Tooltip title="Color info">
                                                    <img src={info} />
                                                </Tooltip>
                                            </p>
                                            <div className='summaryRadioBTN'>
                                                <Radio.Group onChange={onChangeColor} value={colorValue}>
                                                    <Radio value={'color-suggestion'}>I want suggestion for printing color</Radio>
                                                    <Radio value={'specify-color'}>I want to specify print color</Radio>
                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className='colorsSeletions'>
                                            <div>
                                                <p>Color 01 <span>*</span> <img src={colorsWheel} /></p>
                                                <Select
                                                    defaultValue="Select"
                                                    className='color-select'
                                                    // style={{
                                                    //     width: 120,
                                                    // }}
                                                    onChange={handleChange}
                                                    options={[
                                                        {
                                                            value: 'blue',
                                                            label: 'Blue',
                                                        },
                                                        {
                                                            value: 'green',
                                                            label: 'Green',
                                                        },
                                                        {
                                                            value: 'red',
                                                            label: 'Red',
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <p>Color 02 <span>*</span> <img src={colorsWheel} /></p>
                                                <Select
                                                    defaultValue="Select"
                                                    className='color-select'
                                                    // style={{
                                                    //     width: 120,
                                                    // }}
                                                    onChange={handleChange}
                                                    options={[
                                                        {
                                                            value: 'blue',
                                                            label: 'Blue',
                                                        },
                                                        {
                                                            value: 'green',
                                                            label: 'Green',
                                                        },
                                                        {
                                                            value: 'red',
                                                            label: 'Red',
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <p>Color 03 <span>*</span> <img src={colorsWheel} /></p>
                                                <Select
                                                    defaultValue="Select"
                                                    className='color-select'
                                                    // style={{
                                                    //     width: 120,
                                                    // }}
                                                    onChange={handleChange}
                                                    options={[
                                                        {
                                                            value: 'blue',
                                                            label: 'Blue',
                                                        },
                                                        {
                                                            value: 'green',
                                                            label: 'Green',
                                                        },
                                                        {
                                                            value: 'red',
                                                            label: 'Red',
                                                        },
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='messageInfo'>
                                        <p>Message <span>*</span></p>
                                        <textarea placeholder='Your message'></textarea>
                                    </div>
                                    <button>Save details <img src={arrowRightGreen} /></button>
                                </div>
                            )}
                            <div className='productCard'>
                                <div className='productIMGDetails'>
                                    <img src={shoppingCartIMG2} />
                                    <div className='productDetails'>
                                        <p>Hoodie with kangaroo pocket | Hooded Sweat</p>
                                        <p>350 items</p>
                                        <p>Azure Blue  |   2-Color Print   |   Express Delivery (7 days)</p>
                                    </div>
                                </div>
                                <div className='productPrice'>
                                    <p>37,905.00 SEK</p>
                                </div>
                            </div>
                        </div>
                        <div className='summaryCard'>
                            <h6>Order summary</h6>
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Item (s) Total</p>
                                    <p>Shipping Charges</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                    <p>500.00 SEK</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Item (s) Total</p>
                                    <p>Shipping Charges</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                    <p>500.00 SEK</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='summaryTop'>
                                <div className='leftSide'>
                                    <p>Grand Total</p>
                                </div>
                                <div className='rightSide'>
                                    <p>1,04,520.00 SEK</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='summaryCardMobile'>
                        <div className='titleLink'>
                            <p>Grand Total</p>
                            <a href='#'>View order summary</a>
                        </div>
                        <p>1,31,275.00 SEK</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PrintInformation
