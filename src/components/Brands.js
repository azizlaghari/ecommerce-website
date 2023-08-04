import React from 'react'
import '../styles/components/Brands.css'
import logo1 from '../assets/brand-logos/logo1.png'
import logo2 from '../assets/brand-logos/logo2.png'
import logo3 from '../assets/brand-logos/logo3.png'
import logo4 from '../assets/brand-logos/logo4.png'
import logo5 from '../assets/brand-logos/logo5.png'
import logo6 from '../assets/brand-logos/logo6.png'
import logo7 from '../assets/brand-logos/logo7.png'
import logo8 from '../assets/brand-logos/logo8.png'
import logo9 from '../assets/brand-logos/logo9.png'

const Brands = () => {
    const LOGO1 = logo1
    const LOGO2 = logo2
    const LOGO3 = logo3
    const LOGO4 = logo4
    const LOGO5 = logo5
    const LOGO6 = logo6
    const LOGO7 = logo7
    const LOGO8 = logo8
    const LOGO9 = logo9
    return (
        <>
            <div className='brands'>
                <div className='title'>
                    <p className='heading'>Profile Clothing From Popular Brands</p>
                </div>
                <div className='companiesLogos'>
                    <div className='top4logos'>
                        <img src={LOGO1} />
                        <img src={LOGO2} />
                        <img src={LOGO3} />
                        <img src={LOGO4} />
                    </div>
                    <div className='bottom5Logos'>
                        <img src={LOGO5} />
                        <img src={LOGO6} />
                        <img src={LOGO7} />
                        <img src={LOGO8} />
                        <img src={LOGO9} />
                    </div>
                </div>
                <div className='image-slider'>
                    <img src={LOGO1} />
                    <img src={LOGO5} />
                    <img src={LOGO6} />
                    <img src={LOGO7} />
                    <img src={LOGO8} />
                    <img src={LOGO9} />
                    <img src={LOGO2} />
                    <img src={LOGO3} />
                    <img src={LOGO4} />
                </div>
                <button className='brandBTN'>See all brands for our profile clothing</button>
            </div >
        </>
    )
}

export default Brands
