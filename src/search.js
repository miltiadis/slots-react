import React, {useState} from "react";
import {ReactComponent as SearchIcon} from './svg/ico_search.svg';


const Search = (props) => {
    const [focus, setFocus] = useState('')

    return <>
        <form className="c-search">
            <SearchIcon icon="search" className={`c-search__icon ${focus ? 'is-active' : ''}`}/>

            <input
                className="c-search__item"
                type="text"
                placeholder="Search"
                aria-label="Search games"
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
                onChange={(e) => props.setSearch(e.target.value)}

            />

        </form>
    </>
}

export default Search;