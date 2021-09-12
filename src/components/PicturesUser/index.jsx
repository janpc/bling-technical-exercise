import React from 'react';

import './style.css'

 const PictureList = ({user}) => {

  const { name, profile_image, portfolio_url} = user;
  
  return <a href={portfolio_url} className="picturesUser">
          <img alt={name} src={profile_image.small} className="picturesUser--Image"/>
          <span className="picturesUser--Name">{name}</span>
        </a>;
}

export default PictureList;
