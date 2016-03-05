import Map from "./Map.react";
import React from "react";
export default class MapBox extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="mapBox">
                <Map />
                <article id="marker"></article>
            </div>
        )
    }
}