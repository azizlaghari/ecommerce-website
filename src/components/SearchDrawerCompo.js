import React from 'react'

const SearchDrawerCompo = ({ images, title, subtitle }) => {
    return (
        <>
            <div className='SearchDrawerCompo' style={{padding: '1rem'}}>
                <img className='SearchDrawerCompo-img' src={images}></img>
                <div className='SearchDrawer-text' >
                    <p className='SearchDrawer-title'>{title}</p>
                    <p className='SearchDrawer-subtitle'>{subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default SearchDrawerCompo
