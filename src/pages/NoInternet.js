import React from 'react'
import arrowRightGreen from '../assets/arrowRightGreen.png'
import noInternetIMG from '../assets/noInternetIMG.png'

const NoInternet = () => {
    return (
        <div>
            <div className='Page404'>
                <div className='page404Container'>
                    <img src={noInternetIMG} style={{ maxWidth: '100%', height: 'auto' }} />
                    <h5>No Internet Connection</h5>
                    <p>Something Went Wrong</p>
                    <button className='whiteBTN'>Try Again<img src={arrowRightGreen} /></button>
                </div>
            </div>
        </div>
    )
}

export default NoInternet
