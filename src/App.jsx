import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

import PictureList from './components/PictureList';
import Search from './components/Search';
import PageController from './components/PageController';

import { getUnsplashPhotos, searchPhotos } from './unsplash';
import { randomizeArray } from './utils/randomize';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowingSearchResults, setIsShowingSearchResults] = useState(false);
  const [page, setPage] = useState(1);
  const [disorderedPhotos, setDisorderedPhotos] = useState([]);
  const [areDisordered, setAreDisordered] = useState(false);

  async function getPics() {
    const pics = await getUnsplashPhotos({page});
    setPhotos(pics);
  }

  async function search(query) {
    const pics = await searchPhotos({query, page});
    setSearchedPhotos(pics);
  }

  function disorderPhotos() {
    if(!areDisordered) {
      let newDisorderedPhotos = [];
      if( isShowingSearchResults ) {
        newDisorderedPhotos = randomizeArray(searchedPhotos);
      } else{
        newDisorderedPhotos = randomizeArray(photos);
      }
      setDisorderedPhotos(newDisorderedPhotos);
    }
    setAreDisordered(!areDisordered);
  }

  useEffect(() => {
    if(!isShowingSearchResults){
      getPics();
    }
  }, []);

  useEffect(()=>{
    if(searchQuery!==''){
      search(searchQuery);
      setIsShowingSearchResults(true);
    } else if(isShowingSearchResults){
      setIsShowingSearchResults(false);
    }

    setPage(1);

  },[searchQuery]);

  useEffect(()=>{
    setAreDisordered(false);

    if(isShowingSearchResults){
      setSearchedPhotos([]);
      search(searchQuery);
    } else {
      setPhotos([]);
      getPics();
    }

  }, [page]);

  const pics = useMemo(() => areDisordered ? disorderedPhotos : isShowingSearchResults ? searchedPhotos : photos, [areDisordered, isShowingSearchResults, photos, disorderedPhotos, searchedPhotos ]);


  return (
    <div className="App">
      <main className="App--Main">
        <div className="App--TopContainer">
          <Search setQuery={setSearchQuery}/>
          <PageController page={page} setPage={setPage} isNextPage={(isShowingSearchResults? searchedPhotos : photos).length === 30} randomize={disorderPhotos} areDisordered={areDisordered}/>
        </div>
        <PictureList photos={pics}/>
      </main>
    </div>
  )
}

export default App
