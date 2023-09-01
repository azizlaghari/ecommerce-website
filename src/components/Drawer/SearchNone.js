import React, { useState } from 'react'
import { Drawer } from 'antd'
import { BiSearch } from 'react-icons/bi'
// img
import searchNoneIMG from '../../assets/searchNoneIMG.png'
import { LiaTimesSolid } from 'react-icons/lia'

const SearchNone = () => {
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
                <BiSearch />
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
                        <p></p>
                        <LiaTimesSolid onClick={onClose} />
                    </div>
                <div className='searchNoneDrawer-container'>
                    <img src={searchNoneIMG} className='searchNoneIMG' />
                    <h5 className='searcNone-heading'>No results found</h5>
                    <p className='searcNone-subheading'>There is no result as per your search keyword. Please try again</p>
                </div>
            </Drawer>
        </>
    )
}
export default SearchNone
