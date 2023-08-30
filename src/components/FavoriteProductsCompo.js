import React from 'react'

const FavoriteProductsCompo = ({ images, logo, heartIcon, title, discp, price }) => {
    return (
        <div className='FavoriteProductsCompo'>
            <img className='heartIcon' src={heartIcon} />
            <div className='productIMG'>
                <img src={images} />
            </div>
            <img className='logo' src={logo} />
            <div className='productDetails'>
                <p>{title}</p>
                <p>{discp}</p>
                {price}
            </div>
        </div>
    )
}

export default FavoriteProductsCompo
