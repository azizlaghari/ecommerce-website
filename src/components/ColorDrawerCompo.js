import React from 'react'
import { FcCheckmark } from 'react-icons/fc'

const ColorDrawerCompo = ({ images, title, setProductColor, colorType, setcolorType }) => {
    return (
        <div>
            <div className='ColorDrawerCompo' onClick={() => setProductColor('')}>
                <div className='colorIMG-title' onClick={() => setcolorType(title)}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={images} />
                        <p>{title}</p>
                    </div>
                    <div>
                        {colorType === title ?
                            <span><FcCheckmark /></span> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorDrawerCompo
