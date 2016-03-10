import Map from "./Map.react.js";
import React from "react";
import ak from "./key";
export default class IncludeMap extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            status:false,
            src: "http://api.map.baidu.com/getscript?v=2.0&ak="+ak
        }
    }

    onLoad(){
        this.setState({status: true});
        this.props.changeMapScriptStatus(true);
    }

    componentDidMount() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.state.src;
        script.onload = this.onLoad.bind(this);
        React.findDOMNode(this.refs.div).appendChild(script);
    }

    render(){
        return(
            <div ref="div" />
        )
    }
}