import React from 'react';
import FNavBar from './FNavBar';

const Search = (props) => {
    return (
        <div style={{width: '100%', height: 1000}}>
            <FNavBar />
            <embed type="text/html" src="http://www.fangsso.com/" style={{width: '100%', height: '100%'}}></embed>
        </div>
    )
}

export default Search;