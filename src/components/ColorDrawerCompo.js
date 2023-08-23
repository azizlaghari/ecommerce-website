import React from 'react'

const ColorDrawerCompo = ({ images, title }) => {
    return (
        <div>
            <div className='ColorDrawerCompo' >
                <div className='colorIMG-title'>
                    <img src={images} />
                    <p>{title}</p>
                </div>
            </div>

        </div>
    )
}

export default ColorDrawerCompo
