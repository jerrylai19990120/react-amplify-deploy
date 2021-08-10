import React from 'react';
import FNavBar from './FNavBar';

const Search = (props) => {
    return (
        <div style={{width: '100%', height: 1000}}>
            <FNavBar />
            <object type="text/html" data="http://www.fangsso.com/" style={{width: '100%', height: '100%'}}>
            </object>
        </div>
    )
}

export default Search;