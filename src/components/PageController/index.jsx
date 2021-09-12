import React from 'react';

import {NextPageIcon, PrevPageIcon, RendomIcon} from '../../icons';

import './style.css'

 const PageController = ({page, setPage, isNextPage, randomize, areDisordered}) => {

  function nextPage() {
    if(isNextPage) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if(page > 1) {
      setPage(page - 1);
    }
  }
        return <div className="pageController">
                  <button type="button" className="topContainerButon--button" onClick={randomize}>
                    <RendomIcon size='32' color={areDisordered? '#ff007d': 'white'} />
                  </button>
                  <button type="button" className="topContainerButon--button" onClick={previousPage}>
                    <PrevPageIcon size='32'/>
                  </button>
                  <span className="pageController--PageNumber">{page}</span>
                  <button type="button" className="topContainerButon--button" onClick={nextPage}>
                    <NextPageIcon size='32'/>
                  </button>
              </div>;
}

export default PageController;