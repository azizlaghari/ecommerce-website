import React, { useState, useEffect } from 'react'
import { Col, Drawer, Row, Tabs } from 'antd'
import { BiHeart } from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'

// import FavoriteProducts1 from '../../assets/favoriteProducts/FavoriteProducts1.png'
// import FavoriteProducts2 from '../../assets/favoriteProducts/FavoriteProducts2.png'
// import FavoriteProducts3 from '../../assets/favoriteProducts/FavoriteProducts3.png'
// import FavoriteProducts4 from '../../assets/favoriteProducts/FavoriteProducts4.png'
// import FavoriteProductsLOGO from '../../assets/favoriteProducts/FavoriteProductsLOGO.png'
// import FavoriteProductsHeart from '../../assets/favoriteProducts/FavoriteProductsHeart.png'
// import FavoriteProductsCompo from '../FavoriteProductsCompo'

const onChange = (key) => {
    console.log(key);
};

// const FavoriteProductsData = [{
//     images: FavoriteProducts1,
//     heartIcon: FavoriteProductsHeart,
//     logo: FavoriteProductsLOGO,
//     title: 'Barn T-shirt',
//     discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
//     price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
// },
// {
//     images: FavoriteProducts2,
//     heartIcon: FavoriteProductsHeart,
//     logo: FavoriteProductsLOGO,
//     title: 'Barn T-shirt',
//     discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
//     price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
// },
// {
//     images: FavoriteProducts3,
//     heartIcon: FavoriteProductsHeart,
//     logo: FavoriteProductsLOGO,
//     title: 'Barn T-shirt',
//     discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
//     price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
// },
// {
//     images: FavoriteProducts4,
//     heartIcon: FavoriteProductsHeart,
//     logo: FavoriteProductsLOGO,
//     title: 'Barn T-shirt',
//     discp: "Children's T-shirt with double stitching in sleeves and hem. Taped neckline fro...",
//     // price: 'From 39.00 SEK'
//     price: <p> From <span style={{ fontWeight: 'bold' }}>39.00 SEK</span></p>
// },
// ]

const FavoriteProductsDrawer = () => {
    const [favorites, setFavorites] = useState([]); // state variable to store the favorite items
    const [open, setOpen] = useState(false); // state variable to control the open/closed state of the component

    useEffect(() => {
        let allShirts = localStorage.getItem('tshirtData'); // retrieve the array of all shirts from localStorage
        allShirts = JSON.parse(allShirts); // parse the array of all shirts
        let storedData = localStorage.getItem('favorites'); // retrieve the array of favorite shirt ids from localStorage
        storedData = JSON.parse(storedData); // parse the array of favorite shirt ids

        setFavorites(storedData?.map((id) => { // set the state variable to an array of favorite shirt objects
            let shirt = allShirts?.find(value => value.id === id); // find the shirt object with the matching id
            return shirt;
        }))
    }, [open]); // run the effect whenever the open state changes

    const { TabPane } = Tabs // Destructuring TabPane from Tabs

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
                width='650'

            >
                <div className='closeIconSearch'>
                    <p>Favorites</p>
                    <LiaTimesSolid onClick={onClose} />
                </div>
                <div className='FavoriteProductsDrawer' style={{ marginTop: '3rem' }}>
                    <Tabs className='Favorite_Products_Drawer' defaultActiveKey="tab1" onChange={onChange}>
                        <TabPane
                            tab={
                                <div className='tabFavorites-main' >
                                    <p >My Favorites</p>
                                </div>
                            }
                            key={'tab1'}
                        >
                            <Row gutter={[10, 10]}>
                                {favorites.map((item) => {
                                    return (
                                        <Col lg={12} md={12} sm={12} xs={24} key={item.id}>
                                            <div >
                                                <div className='FavoriteProductsCompo'>
                                                    <div className='productIMG'>
                                                        <img src={item.image} alt={item.title} />
                                                    </div>
                                                    <img className='logo' src={item.logo} />
                                                    <div className='productDetails'>
                                                        <p>{item.title}</p>
                                                        <p>{item.discp}</p>
                                                        {item.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
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
                                {/* {FavoriteProductsData.map((item, index) => {
                                    return (
                                        <Col lg={12} md={12} sm={12} xs={24} key={index}>
                                            <FavoriteProductsCompo images={item.images} logo={item.logo} heartIcon={item.heartIcon} title={item.title} discp={item.discp} price={item.price} />
                                        </Col>
                                    )
                                })} */}
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
