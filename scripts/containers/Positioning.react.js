import React from 'react';
import MapBox from './../components/MapBox.react.js';
import SearchResult from './../components/SearchResult.react.js';
import IncludeMap from './../components/IncludeMap.react.js';
import ak from './../components/key';

class Positioning extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            mapScriptStatus: false
        }
    }
    changeMapScriptStatus(bol){
        this.setState({mapScriptStatus: bol})
    }
    render(){
        console.log(this.state.mapScriptStatus)
        return(
            <div id="positioning">
                <IncludeMap changeMapScriptStatus={this.changeMapScriptStatus.bind(this)}/>
                <MapBox mapScriptStatus={this.state.mapScriptStatus} />
                <SearchResult />
            </div>
        )
    }
}

export default Positioning;