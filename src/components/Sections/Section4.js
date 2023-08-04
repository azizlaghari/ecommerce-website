import React from 'react'
import '../../styles/components/Section/Section4.css';
// import imageCard1 from '../../assets/imageCard1.png'
// import imageCard2 from '../../assets/imageCard2.png'
import arrowRightGreen from '../../assets/arrowRightGreen.png'

const Section4 = () => {
    // const IMG_CARD1 = imageCard1
    // const IMG_CARD2 = imageCard2
    return (
        <>
            <div className='Section4'>
                <div className='imageCard1'>
                    <div className='title1'>
                        <p className='heading1'>
                            Profile products with print
                        </p>
                    </div>
                    <p className='text1'>
                        Take the opportunity to complement your profile clothes with cheap profile products with print at the same time. Here you can find a large selection of popular profile products at favorable prices. You can choose to trade with print as well as without.
                    </p>
                    <div className='seaction4-tags'>
                        <p className='tags'>thermomuggar</p>
                        <p className='tags'>Water bottles</p>
                        <p className='tags'>Promotional pens</p>
                        <p className='tags'>Notepad</p>
                        <p className='tags'>Keychain</p>
                        <p className='tags'>print for home & kitchen</p>
                        <p className='tags'>tap toys & games</p>
                    </div>
                    <button className='seaction4BTN1'>View all products<img src={arrowRightGreen}/></button>
                </div>

                <div className='imageCard2'>
                    <div className='title'>
                        <p className='heading2'>B&C - Soft Hoodie</p>
                    </div>
                    <button className='seaction4BTN2'>View all products<img src={arrowRightGreen}/></button>

                </div>
            </div>
        </>
    )
}

export default Section4
