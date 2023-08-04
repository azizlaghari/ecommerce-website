import React from 'react'
import '../../styles/components/Section/ModelSection.css'

import model1 from '../../assets/models/model1.png'
import model2 from '../../assets/models/model2.png'
import model3 from '../../assets/models/model3.png'
import model4 from '../../assets/models/model4.png'
import model5 from '../../assets/models/model5.png'
import model6 from '../../assets/models/model6.png'

const ModelSection = () => {
    return (
        <>
            <div className='ModelSection'>
                <div className='models'>
                    <div className='model'>
                        <img src={model1} />
                        <p className='tags modelTAG'>Profile Clothing With Print</p>
                    </div>
                    <div className='model '>
                        <img src={model2} />
                        <p className='tags modelTAG'>Profile Clothing</p>
                    </div>
                    <div className='model'>
                        <img src={model3} />
                        <p className='tags modelTAG'>Fatigues</p>
                    </div>
                    <div className='model'>
                        <img src={model4} />
                        <p className='tags modelTAG'>Warning Clothing</p>
                    </div>
                    <div className='model'>
                        <img src={model5} />
                        <p className='tags modelTAG'>Professional Clothing</p>
                    </div>
                    <div className='model'>
                        <img src={model6} />
                        <p className='tags modelTAG'>Sportswear </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelSection
