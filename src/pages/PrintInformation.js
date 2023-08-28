import React, { useState } from 'react'
import Layout from '../layout/Layout'
import ellipse from '../assets/productListing/ellipse.png'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import uploadICON from '../assets/upload.png'
import shoppingCartIMG1 from '../assets/shoppingCartIMG1.png'
import shoppingCartIMG2 from '../assets/shoppingCartIMG2.png'
import info from '../assets/info.png'
import { Divider, Radio, Tag, Tooltip, Upload, message } from 'antd'




const PrintInformation = () => {
    const [valueFile, setValueFile] = useState(1);
    const onChangeFile = (e) => {
        console.log('radio checked', e.target.valueFile);
        setValueFile(e.target.valueFile);
    };
    const [valueColor, setValueColor] = useState(2);
    const onChangeColor = (e) => {
        console.log('radio checked', e.target.valueColor);
        setValueColor(e.target.valueColor);
    };
    const preventDefault = (e) => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
    };
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
                            <div className='productCard'>
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
                                            <Radio.Group onChange={onChangeFile} value={valueFile}>
                                                <Radio value={0}>Upload my print files later</Radio>
                                                <Radio value={1}>Upload my print files now</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className='fileUploadField'>
                                        <div className='uploadBox'>
                                            <Upload className='upload' {...props}>
                                                <div icon={uploadICON}><p>Select files to upload (the file size should not exceed 5.0MB)</p>
                                                </div>
                                            </Upload>
                                        </div>
                                        <div className='antDtags'>
                                            <Tag closeIcon onClose={preventDefault}>
                                                logotype.pdf (1.0 MB)
                                            </Tag>
                                            <Tag closeIcon onClose={preventDefault}>
                                                shape-one.eps (2.7 MB)
                                            </Tag>
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
                                        <Radio.Group onChange={onChangeColor} value={valueColor}>
                                            <Radio value={1}>I want suggestion for printing color</Radio>
                                            <Radio value={2}>I want to specify print color</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                            <div className='messageInfo'>
                                <p>Message <span>*</span></p>
                                <textarea placeholder='Your message'></textarea>
                            </div>
                            <button>Save details <img src={arrowRightGreen} /></button>
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
