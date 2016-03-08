import React from 'react';
import MapBox from './../components/MapBox.react.js';
import SearchResult from './../components/SearchResult.react.js';
import IncludeMap from './../components/IncludeMap.react.js';
import ak from './../components/key';

class Positioning extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="positioning">
                <IncludeMap />
                <MapBox />
                <SearchResult />
            </div>
        )
    }
}

export default Positioning;