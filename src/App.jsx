import React, { useState, useEffect } from 'react';
import './App.css';

import PictureList from './components/PictureList';
import Search from './components/Search';
import PageController from './components/PageController';
import { RendomIcon} from './icons';

import { getUnsplashPhotos, searchPhotos } from './unsplash';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowingSearchResults, setIsShowingSearchResults] = useState(false);
  const [page, setPage] = useState(1);

  async function getPics() {
    const pics = await getUnsplashPhotos({page});
    setPhotos(pics);
  }

  async function search(query) {
    const pics = await searchPhotos({query, page});
    setSearchedPhotos(pics);
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

  },[searchQuery])

  useEffect(()=>{
    if(isShowingSearchResults){
      search(searchQuery);
    } else {
      getPics();
    }
  }, [page])

  return (
    <div className="App">
      <main className="App--Main">
        <div className="App--TopContainer">
          <Search setQuery={setSearchQuery}/>
          <PageController page={page} setPage={setPage}/>
          <button type="button" className="topContainerButon--button">
                <RendomIcon size='32'/>
              </button>
        </div>
        <PictureList photos={isShowingSearchResults ? searchedPhotos : photos}/>
      </main>
    </div>
  )
}

export default App
