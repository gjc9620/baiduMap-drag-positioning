import React from "react";
import ak from "./key";

const execFunCount = (fun, count) =>{
    let execCount = count;
    return ()=>{
        if(execCount) {
            execCount--;
            return fun(arguments)
        }
    }
}

export default class Map extends React.Component{
    jsonp (url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        return script
    }

    constructor(props) {
        super(props);
    }
    onload(){
        // 百度地图API功能
        var map = new BMap.Map("map");// 创建Map实例
        this.map = map;
        map.component = this;
        map.centerAndZoom(new BMap.Point(120.976159, 31.113901), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.setCenter("上海");
        map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
        this.addListen();
    }
    componentDidMount(){
    }
    addListen(){
        this.map.addEventListener("dragend",this.dragend);
        this.map.addEventListener("zoomend",this.zoomend);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.mapScriptStatus) {
            let onload = execFunCount(this.onload.bind(this),1);
            onload();
        }
    }


    zoomend(){
        this.component.geocoder(); //this指向map对象
    }
    dragend(){
//            debugger;
        this.component.geocoder();
    }



    geocoder(){
//            debugger;
        let centerPoint =  this.map.getCenter();
        let {lat, lng} = centerPoint;

        let url = `http://api.map.baidu.com/geocoder/v2/?ak=${ak}&callback=renderCallback&location=${lat},${lng}&output=json&pois=1`
        this.jsonp(url);
    }

    render(){
        return(
            <section id="map"></section>
        )
    }
};