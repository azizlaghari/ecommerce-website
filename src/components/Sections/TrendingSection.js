import React from 'react'
import '../../styles/components/Section/TrendingSection.css'


const TrendingSection = ({ image, title, subtitle, tags }) => {
    return (
        <>
            <div className='TrendingSection'>
                <div>
                    <div className='trendingImages'>
                        <p className='img-tags'>Professional clothing with print</p>
                        <div className='imageContainer'>
                            <img src={image} />
                        </div>
                        <p className='trendingTitle'>{title}</p>
                        <p className='trendingSubtitle'>{subtitle}</p>
                        <div className='trendingTags'>
                            {tags.map((tag, i) => {
                                return (
                                    <p key={i} className='tags'>{tag}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingSection