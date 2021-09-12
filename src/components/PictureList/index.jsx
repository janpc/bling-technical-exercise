import React from 'react'
import Picture from '../Picture'

import './style.css'

 const PictureList = ({photos}) => {
  return <div className="pictureList">
          {photos.map((photo) =><Picture key={photo.id} photo={photo}/>)}
        </div>;
}

export default PictureList;
