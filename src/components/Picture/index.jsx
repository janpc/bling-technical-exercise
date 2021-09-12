import React from 'react'

import PicturesUser from '../PicturesUser';

import './style.css';

 const Picture = ({photo}) => {
  const {alt_description, urls, user} = photo;
  
  return <div className="pictureContainer">
    <a href={urls.regular}>
      <img className="picture" alt={alt_description} src={urls.small} />
    </a>
    <PicturesUser user={user}/>
  </div>;
}

export default Picture;
