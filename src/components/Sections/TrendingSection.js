import React from 'react'


const TrendingSection = ({ image, title, subtitle, tags }) => {
    return (
        <div className='trendingImages' >
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
    )
}

export default TrendingSection
