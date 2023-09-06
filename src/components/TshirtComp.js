import React, { useState } from 'react'
import heartSelected from '../assets/heartSelected.png'

const TshirtComp = ({ id, image, title, subtitle, price, colors, logo, toptags, colorsWheel, heartWhiteIcon }) => {

  const handleFavorite = (id) => {
    const addToFavorite = () => {
      let parsed = JSON.parse(favorites); // parse the favorites list from localStorage
      let index = parsed.indexOf(id); // get the index of the item to be added
      if (index === -1) { // if the item is not already in the list
        parsed.push(id); // add the item to the list
      }
      localStorage.setItem("favorites", JSON.stringify(parsed)) // store the updated list in localStorage
    }
    let favorites = localStorage.getItem("favorites"); // get the favorites list from localStorage
    if (favorites) { // if the favorites list exists in localStorage
      addToFavorite(); // add the item to the favorites list
    } else { // if the favorites list does not exist in localStorage
      localStorage.setItem("favorites", JSON.stringify([])); // create an empty favorites list in localStorage
      addToFavorite(); // add the item to the favorites list
    }
  };

  const [favoriteIcon, setFavoriteIcon] = useState(null)


  return (
    <>
      <div className='TshirtComp'>
        <div className='tshirt-container'>
          <div className='image-TshirtComp'>
            <div className='toptags-TshirtComp'>
              {toptags.map((item, i) => {
                return (
                  <p key={i} className='toptags'>
                    {item}
                  </p>
                )
              })}
            </div>
            {favoriteIcon !== null ? (
              <img src={heartSelected} className='heartWhiteIcon'></img>
            ) : (
              <img onClick={() => {handleFavorite(id); setFavoriteIcon();}}  className='heartWhiteIcon' src={heartWhiteIcon} />)}
            <img src={image} />
          </div>
          <div className='logo-TshirtComp'>
            <img src={logo} />
          </div>
          <p className='title-TshirtComp'>{title}</p>
          <p className='subtitle-TshirtComp'>{subtitle}</p>
          <p className='price-TshirtComp'>{price}</p>
          <div className='colors'>
            <img className='colorsWheel-TshirtComp' src={colorsWheel}></img>
            <p className='colors-TshirtComp'>{colors}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TshirtComp
