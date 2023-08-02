import React from 'react'
import { Row, Col } from 'antd'

import '../../styles/components/Section/Section2.css'
import manImage from '../../assets/manImage.png'
import twoHatsImage from '../../assets/twoHats.png'

const Section2 = () => {
    const manImg = manImage
    const hatsImg = twoHatsImage
    return (
        <>
            <Row className='boxes' gutter={[20, 20]}>
                <Col md={14} sm={24} xs={24}>
                    <div className='leftBox'>
                        <div className='leftText'>
                            <p className='textTitle'>Fatigues</p>
                            <p className='textSubtitle'>Protective clothing with print for companies</p>
                            <p className='paragraphText'>
                                Protective profile clothing can be of various types, protective clothing with print
                                for more physically demanding work can be found under the workwear category.
                                <br/>
                                <br/>

                                Protective clothing with reflectors for high visibility in the dark can be found under the
                                warning clothing category when shopping for printed work clothes.
                            </p>
                            <p className='tags'>fatigues</p>
                            <p className='tags'>warning clothes</p>
                            <button className='heroBTN'>All protective clothes</button>
                        </div>
                        <div className='manImage'>
                            <img src={manImg}></img>
                        </div>
                    </div>
                </Col>
                <Col md={10} sm={24} xs={24}>
                    <div className='rightBox'>
                            <div className='leftText'>
                                <p className='textTitle'>Headgear With Profiling</p>
                                <p className='textSubtitle'>Profile clothing such as headgear with print or embroidery</p>
                                <p className='paragraphText'>
                                    Order hats with print or caps with print for your profile clothing as headwear. Here you will also find other headgear for marking, such as hats, haldsuks and headbands for profiling, among other things.
                                    <br/>
                                    <br/>
                                     Profiling with print or embroidery can be purchased separately with any marking method.
                                </p>
                                <p className='tags'>hats with embroidery & prints</p>
                                <p className='tags'>caps with print & embroidery</p>
                                <p className='tags'>hats</p>
                                <button className='heroBTN'>Check out all products</button>
                            </div>
                            <div className='hatsImage'>
                                <img src={hatsImg}></img>
                            </div>
                        </div>
                </Col>
            </Row>
        </>
    )
}

export default Section2
