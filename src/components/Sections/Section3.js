import React from 'react'
import '../../styles/components/Section/Section3.css'
import { Col, Row } from 'antd'
import shirtIcon from '../../assets/ICON.png'
import yellowHoody from '../../assets/yellowHoody.png'


const Section3 = () => {
    const ICON = shirtIcon
    const yellow_Hoody = yellowHoody
    return (
        <>
            <Row className='boxes-Section3' gutter={[20, 20]}>
                <Col xl={10} md={24} sm={24} xs={24}>
                    <div className='leftBox-Section3'>
                        <div className='text-Section3'>
                            <div className='icon-Section3'>
                                <img src={ICON}></img>
                            </div>
                            <div className='content-container'>
                                <div>
                                    <p className='textTitle-Section3'>Environment & Sustainability</p>
                                    <p className='textSubtitle-Section3'>Our work for sustainable solutions - together!</p>
                                </div>
                                <p className='paragraphText-Section3'>
                                    As a growing printing company in the profile and textile industry, we are well aware that we have a great responsibility to take care of our environment and our fellow humans on the only planet we have. We have always aimed to develop our business operations with sustainable solutions and take social responsibility, both on a global and local level.
                                    <br />
                                    <br />
                                    Since our start in 2012, we have come a long way with the development of our lasting sustainability work within operations, service and product range.
                                </p>
                                <button className='heroBTN sectionLeftBTN'>Learn more</button>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xl={14} md={24} sm={24} xs={24}>
                    <div className='rightBox-Section3'>
                        <div className='manImage-Section3'>
                            <img src={yellow_Hoody}></img>
                        </div>
                        <div className='rightText-Section3'>
                            <p className='rightTitle-Section3'>Class Jerseys</p>
                            <p className='rightSubtitle-Section3'>Large assortment of school shirts</p>
                            <p className='rightparagraph-Section3'>
                                We have all class shirts with print! In addition to choosing and creating your own motif, it is equally important to choose the right shirt for your school class. Here with us, you will find many different school shirts, everything from class t-shirts to class hoodies, among other things. We deliver to all of Sweden, so all schools are welcome to order class shirts online from us with fast delivery and cheap shipping.
                                <br />
                                <br />
                                With us, you can always count on us to deliver high-class class shirts on your terms!
                            </p>
                            <button className='heroBTN sectionRightBTN'>Show products</button>
                        </div>

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Section3
