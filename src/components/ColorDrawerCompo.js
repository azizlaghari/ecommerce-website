import React from 'react'
import { FcCheckmark } from 'react-icons/fc'

const ColorDrawerCompo = ({ images, title, setProductColor, colorType, setcolorType }) => {
    return (
        <div>
            <div className='ColorDrawerCompo' onClick={() => setProductColor('')}>
                <div className='colorIMG-title' onClick={() => setcolorType(title)}>
                    <img src={images} />
                    <p>{title}</p>
                    {colorType === title ?
                        <div style={{ marginLeft: '5rem' }}><FcCheckmark /></div> : ''}
                </div>
            </div>
        </div>
    )
}

export default ColorDrawerCompo
