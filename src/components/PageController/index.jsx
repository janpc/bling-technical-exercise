import React from 'react';

import {NextPageIcon, PrevPageIcon} from '../../icons';

import './style.css'

 const PageController = ({page, setPage}) => {

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if(page > 1) {
      setPage(page - 1);
    }
  }
        return <div className="pageController">
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