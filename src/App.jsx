import React, { useState, useEffect } from 'react'
import './App.css'
import { getUnsplashPhotos } from './unsplash';

function App() {

  const [photos, setPhotos] = useState([]);

  async function getPics() {
    const photos = await getUnsplashPhotos();
    setPhotos(photos);
    console.log(photos);
  }

  useEffect(() => {
    getPics();
  }, []);

  return (
    <div className="App">
      {photos.map(({alt_description, urls}) =><img alt={alt_description} src={urls.regular}/>)}
    </div>
  )
}

export default App
