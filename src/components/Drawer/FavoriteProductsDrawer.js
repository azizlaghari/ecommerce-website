import React, { useState } from 'react'
import { Col, Drawer, Row, Tabs } from 'antd'
import { BiHeart } from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'

import FavoriteProducts1 from '../../assets/favoriteProducts/FavoriteProducts1.png'
import FavoriteProducts2 from '../../assets/favoriteProducts/FavoriteProducts2.png'
import FavoriteProducts3 from '../../assets/favoriteProducts/FavoriteProducts3.png'
import FavoriteProducts4 from '../../assets/favoriteProducts/FavoriteProducts4.png'
import FavoriteProductsLOGO from '../../assets/favoriteProducts/FavoriteProductsLOGO.png'
import FavoriteProductsHeart from '../../assets/favoriteProducts/FavoriteProductsHeart.png'
import FavoriteProductsCompo from '../FavoriteProductsCompo'

const onChange = (key) => {
    console.log(key);
};

const FavoriteProductsData = [{
    images: FavoriteProducts1,
    heartIcon: FavoriteProductsHeart,
    logo: FavoriteProductsLOGO,
    title: 'Barn T-shirt',
    discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
    price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
},
{
    images: FavoriteProducts2,
    heartIcon: FavoriteProductsHeart,
    logo: FavoriteProductsLOGO,
    title: 'Barn T-shirt',
    discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
    price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
},
{
    images: FavoriteProducts3,
    heartIcon: FavoriteProductsHeart,
    logo: FavoriteProductsLOGO,
    title: 'Barn T-shirt',
    discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
    price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
},
{
    images: FavoriteProducts4,
    heartIcon: FavoriteProductsHeart,
    logo: FavoriteProductsLOGO,
    title: 'Barn T-shirt',
    discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
    // price: 'From 39.00 SEK'
    price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
},
]


const FavoriteProductsDrawer = () => {
    const { TabPane } = Tabs // Destructuring TabPane from Tabs

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
                <BiHeart />
            </div>
            <Drawer
                className='FavoriteProductsDrawer-main'
                // title='What are you looking for?'
                placement='right'
                onClose={onClose}
                open={open}
                headerStyle={{ display: 'none' }}
            >
                <div className='closeIconSearch'>
                    <p>Favorites</p>
                    <LiaTimesSolid onClick={onClose} />
                </div>
                <div className='FavoriteProductsDrawer' style={{ marginTop: '3rem' }}>
                    <Tabs defaultActiveKey="tab1" onChange={onChange}>
                        <TabPane
                            tab={
                                <div className='tabFavorites-main' >
                                    <p >My Favorites</p>
                                </div>
                            }
                            key={'tab1'}
                        >
                            <Row gutter={[10, 10]}>
                                {/* <div className='tabFavorites'> */}
                                {FavoriteProductsData.map((item, index) => {
                                    return (
                                        <Col lg={12} md={12} sm={12} xs={24} key={index}>
                                            <FavoriteProductsCompo images={item.images} logo={item.logo} heartIcon={item.heartIcon} title={item.title} discp={item.discp} price={item.price} />
                                        </Col>
                                    )
                                })}
                                {/* </div> */}
                            </Row>

                        </TabPane>
                        <TabPane
                            tab={
                                <div className='tabRecently-main'>
                                    <p>Recently Viewed</p>
                                </div>
                            }
                            key={'tab2'}
                        >
                            <Row gutter={[10, 10]}>
                                {/* <div className='tabFavorites'> */}
                                {FavoriteProductsData.map((item, index) => {
                                    return (
                                        <Col lg={12} md={12} sm={12} xs={24} key={index}>
                                            <FavoriteProductsCompo images={item.images} logo={item.logo} heartIcon={item.heartIcon} title={item.title} discp={item.discp} price={item.price} />
                                        </Col>
                                    )
                                })}
                                {/* </div> */}
                            </Row>

                        </TabPane>
                    </Tabs>
                </div>
            </Drawer>
        </>
    )
}
export default FavoriteProductsDrawer
