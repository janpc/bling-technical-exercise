import React, {useState} from 'react';

import {SearchIcon} from '../../icons';

import './style.css'

 const Search = ({setQuery}) => {
        const [isFocused, setFocused] = useState(false);

        return <div className={`search ${isFocused && 'focused'}`}>
                <SearchIcon size='20'/>
                <input
                type="text"
                className="search--input"
                placeholder="Search"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onMouseEnter={() => setFocused(true)}
                onMouseLeave={() => setFocused(false)}
                onChange={(e) => setQuery(e.target.value)}
                />
                </div>;
}

export default Search;
