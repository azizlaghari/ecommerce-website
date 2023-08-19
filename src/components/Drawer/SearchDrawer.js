import React, { useState } from 'react'
import { Col, Divider, Drawer, Input, Row } from 'antd'
import { BiSearch } from 'react-icons/bi'
// img
import searchDimg1 from '../../assets/searchDrawerIMG/searchDimg1.png'
import searchDimg2 from '../../assets/searchDrawerIMG/searchDimg2.png'
import searchDimg3 from '../../assets/searchDrawerIMG/searchDimg3.png'
import searchDimg4 from '../../assets/searchDrawerIMG/searchDimg4.png'
import searchDimg5 from '../../assets/searchDrawerIMG/searchDimg5.png'
import searchDimg6 from '../../assets/searchDrawerIMG/searchDimg6.png'
import searchDimg7 from '../../assets/searchDrawerIMG/searchDimg7.png'
import searchDimg8 from '../../assets/searchDrawerIMG/searchDimg8.png'
import searchDimg9 from '../../assets/searchDrawerIMG/searchDimg9.png'
import searchDimg10 from '../../assets/searchDrawerIMG/searchDimg10.png'
import searchDimg11 from '../../assets/searchDrawerIMG/searchDimg11.png'
import searchDimg12 from '../../assets/searchDrawerIMG/searchDimg12.png'
import SearchDrawerCompo from '../SearchDrawerCompo'

const searchDrawerData = [
    {
        images: searchDimg1,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg2,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg3,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg4,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },

    {
        images: searchDimg5,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg6,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg7,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },

    {
        images: searchDimg8,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg9,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg10,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg11,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
    {
        images: searchDimg12,
        title: 'Male T-shirts',
        subtitle: '27 products',
    },
]

const SearchDrawer = () => {
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
                className='searchDrawer-main'
                // title='What are you looking for?'
                placement='right'
                onClose={onClose}
                open={open}
            >
                <div className='searchDrawer-container'>
                    <div className='searchDrawer-input'>
                        <Input size='large' placeholder='What are you looking for?' prefix={<BiSearch />} />
                    </div>
                    <div className='searchDrawer-heading1'>
                        <p className='searchDrawer'>Recent searches</p>
                        <span className='searchTags-container'>
                            <span className='searchTags'>male t-shirt</span>
                            <span className='searchTags'>Women sportswear</span>
                            <span className='searchTags'>bluetooth Speakers</span>
                            <span className='searchTags'>pens</span>
                        </span>
                    </div>
                    <div className='searchDivider'>
                        <Divider />
                    </div>
                    <div className='searchDrawer-heading1'>
                        <p className='searchDrawer'>Discover Some Popular Categories</p>
                    </div>
                    <Row>
                        {searchDrawerData.map((item, index) => {
                            return (
                                <Col lg={8} md={8} sm={12} xs={12} key={index}>
                                    <SearchDrawerCompo
                                        images={item.images}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        key={index}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Drawer>
        </>
    )
}
export default SearchDrawer
