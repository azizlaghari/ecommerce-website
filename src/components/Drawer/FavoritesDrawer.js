import React, { useState } from 'react'
import { Drawer } from 'antd'
import { BiHeart } from 'react-icons/bi'
// img
import FavoritesDrawerIMG from '../../assets/FavoritesDrawerIMG.png'
import arrow_right from '../../assets/arrow_right.png'
import { LiaTimesSolid } from 'react-icons/lia'

const FavoritesDrawer = () => {
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
                className='searchNoneDrawer-main'
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
                <div className='searchNoneDrawer-container'>
                    <img src={FavoritesDrawerIMG} className='searchNoneIMG' />
                    <h5 className='searcNone-heading'>No favorites yet?</h5>
                    <p className='searcNone-subheading'>You don’t have listed any of your favorite items here. Check out our various products and save them now.</p>
                    <button className='greenBTN'>Shop now<img src={arrow_right} /></button>
                </div>
            </Drawer>
        </>
    )
}
export default FavoritesDrawer
