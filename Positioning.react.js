import React from 'react';
import MapBox from './MapBox.react';
import SearchResult from './SearchResult.react';
import IncludeMap from './IncludeMap.react';
import ak from './key';

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