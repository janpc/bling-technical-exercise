import React from 'react'

import PicturesUser from '../PicturesUser';

import './style.css';

 const Picture = ({photo}) => {
  const {alt_description, urls, user} = photo;
  
  return <a href={urls.regular} className="pictureContainer">
    <img className="picture" alt={alt_description} src={urls.small}/> <PicturesUser user={user}/>
  </a>;
}

export default Picture;
