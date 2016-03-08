import React from 'react';

export default class SearchResult extends React.Component{

    constructor(props) {
        super(props);
        window.renderCallback = this.fetchDateComplete.bind(this);
        this.state = {
            mapResult: {
                pois:[]
            }
        };
    }


    componentDidMount(){
        window.renderCallback = this.fetchDateComplete.bind(this);
    }
    fetchDateComplete(json){
        this.setState({mapResult: json.result});
    }
    render(){
        console.log(this.state.mapResult);
        let resultList = this.state.mapResult.pois.map((v, i, n)=>{
            return (
                <div key={i}>{v.addr + v.name }</div>
            )
        });
        return (
            <div>
                {resultList}
            </div>
        )
    }
}