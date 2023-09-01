import React from 'react'
// import { FcCheckmark } from 'react-icons/fc'

const ColorDrawerCompo = ({ images, title }) => {
    return (
        <div>
            <div className='ColorDrawerCompo' >
                <div className='colorIMG-title'>
                    <img src={images}  />
                    <p>{title}</p>
                    {/* <FcCheckmark style={{marginLeft: '12rem'}} /> */}
                </div>
            </div>

        </div>
    )
}

export default ColorDrawerCompo
