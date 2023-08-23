import React from 'react'

const RecentlyViewedCompo = ({ image, title, price }) => {
    return (
        <div>
            <div className='RecentlyViewedCompo'>
                <img src={image}></img>
                <p>{title}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default RecentlyViewedCompo
