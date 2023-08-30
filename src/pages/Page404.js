import React from 'react'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import page404IMG from '../assets/page404IMG.png'


const Page404 = () => {
    return (
        <>
            <div className='Page404'>
                <div className='page404Container'>
                    <img src={page404IMG} style={{ maxWidth: '100%', height: 'auto' }} />
                    <h5>Ooppss…it’s a 404 error</h5>
                    <p>The page you are looking for cannot be found. Sorry for the inconvenience.</p>
                    <button className='whiteBTN'>Go back to home<img src={arrowRightGreen} /></button>
                </div>
            </div>
        </>
    )
}

export default Page404
