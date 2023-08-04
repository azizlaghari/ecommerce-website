import React from 'react'
import '../../styles/components/Section/TradeSrction.css';
import cartTrade from '../../assets/trade-icons/cartTrade.png'
import clickTrade from '../../assets/trade-icons/clickTrade.png'
import exam_resultsTrade from '../../assets/trade-icons/exam-resultsTrade.png'
import questionnaireTrade from '../../assets/trade-icons/questionnaireTrade.png'
import ARROW1 from '../../assets/trade-icons/ARROW1.png'
import ARROW2 from '../../assets/trade-icons/ARROW2.png'
import arrow_right from '../../assets/arrow_right.png'

const TradeSrction = () => {
    return (
        <>
            <div className='TradeSrction'>
                <div className='title-btn-TradeSrction'>
                    <div className='heading-TradeSection'>
                        <p className='title-TradeSrction'>How To Trade With Print</p>
                        <p className='subtitle-TradeSrction'>You will receive a sketch and quote before you place your order</p>
                    </div>
                    <button className='btn-TradeSrction'>Start choosing clothes<img src={arrow_right}/></button>
                </div>
                <div className='icons-TradeSrction'>
                    <div className='iconDiv'>
                        <span className='bg-white-box'>
                            <img src={clickTrade} />
                        </span>
                        <div className='icon-title-sub'>
                            <p className='title-cart'>step 01</p>
                            <p className='subtitle-cart'>Select articles & tick profile</p>
                        </div>
                    </div>
                    <img src={ARROW1} className='arrow-big' />
                    {/* <img className='arrow-small' /> */}
                    <div className='iconDiv'>
                        <span className='bg-white-box'>
                            <img src={cartTrade} />
                        </span>
                        <div className='icon-title-sub'>
                            <p className='title-cart'>step 02</p>
                            <p className='subtitle-cart'>Go to the shopping cart</p>
                        </div>
                    </div>
                    <img src={ARROW2} className='arrow-big' />
                    {/* <img className='arrow-small' /> */}
                    <div className='iconDiv'>
                        <span className='bg-white-box'>
                            <img src={exam_resultsTrade} />
                        </span>
                        <div className='icon-title-sub'>
                            <p className='title-cart'>step 03</p>
                            <p className='subtitle-cart'>Fill your details & describe the desired profiling</p>
                        </div>
                    </div>
                    <img src={ARROW1} className='arrow-big' />
                    {/* <img className='arrow-small' /> */}
                    <div className='iconDiv'>
                        <span className='bg-white-box'>
                            <img src={questionnaireTrade} />
                        </span>
                        <div className='icon-title-sub'>
                            <p className='title-cart'>step 04</p>
                            <p className='subtitle-cart'>Submit your request for a quotation</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TradeSrction
