import Map from "./Map.react.js";
import React from "react";
export default class MapBox extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.mapScriptStatus)
        return(
            <div id="mapBox">
                <Map mapScriptStatus={this.props.mapScriptStatus}/>
                <article id="marker"></article>
            </div>
        )
    }
}