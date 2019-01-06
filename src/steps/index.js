import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "./index.css"
import {ljHttpInfo} from "ljshell"
console.log(ljHttpInfo)
const ThemeContext = React.createContext('light');
// import Step from "./Step"

class Steps extends Component {
    constructor(props, context) {
        super(props);
        // context(props)
        console.log("1111", props);
        this.state = {
            children: null
        }
    }
    // static defaultProps = {
    //     initial: 0,
    //     // current:18,
    //     status: "warn"
    // }
    // static propTypes = {
    //     initial: PropTypes.number,//起始序号，从 0 开始记数
    //     current: PropTypes.number,//指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态
    //     status: PropTypes.string,   //指定当前步骤的状态，可选warn wait process finish error 
    //     // userid: PropTypes.number.isRequired
    // }
    componentDidMount(){
        
    }
    download = ()=>{
        console.log(999)
        let files = ["http://img0.imgtn.bdimg.com/it/u=987779426,271111378&fm=26&gp=0.jpg"];
//         // 扩展API加载完毕后调用onPlusReady回调函数 
//             document.addEventListener("plusready", onPlusReady, false);
//             var dtask = null;
//             // 扩展API加载完毕，现在可以正常调用扩展API 
//             function onPlusReady() {
//             }
//             // 监听下载任务状态 
//             function onStateChanged(download, status) {
//                 if(download.state == 4 && status == 200){
//                     // 下载完成 
//                     alert("Download success: " + download.getFileName());  
//                 }  
//             }
//             // 创建下载任务
//             function createDownload() {
//                 dtask = plus.downloader.createDownload("http://www.abc.com/a.doc");
//                 dtask.addEventListener("statechanged", onStateChanged, false);
//                 dtask.start(); 
//             }
//             // 暂停下载任务 
//             function pauseDownload() {
//                 dtask.pause();
//             }
//             // 取消下载任务 
//             function abortDownload() {
//                 dtask.abort();
// }
        // function savePicture() {

        //     // 创建下载任务
        //     let picurl="http://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fimg7.007swz.com%2Fcpimg%2Ftiepianji%2F0TZ2HwOkwn_1335029857.jpg&thumburl=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D987779426%2C271111378%26fm%3D26%26gp%3D0.jpg";
        //     //图片保存到手机后的路径
        //     let picname="_downloads/erwei.png";
        //     var dtask = plus.downloader.createDownload(picurl, {}, function ( d, status ) {
        //     // 下载完成
        //     if ( status == 200 ) { 
        //     //	alert( "Download success: " + d.filename );
        //     plus.gallery.save(picname,function() {//保存到相册方法
        //     mui.toast('已保存到手机相册');
        //     }, function() {
        //     mui.toast('保存失败，请重试！');
        //     });
        //     } else {
        //     //	alert( "Download failed: " + status ); 
        //     }
        //     });
        //     //dtask.addEventListener( "statechanged", onStateChanged, false );
        //     dtask.start();//开始下载
        // }

    }
    componentWillMount() {
        let { children } = this.props;
        // console.log(this.props)
        this.setState({
            children,
        })
    }
    render() {
        // console.log(333, this.props)
        return (
            <div className="ant-steps">
            <div onClick={this.download}>下载</div>
                {/* <ThemeContext.Provider value={{ ...this.props }}>
                    {this.state.children}
                </ThemeContext.Provider> */}
            </div>
        )
    }
}
// Steps.Step =Step
// console.log("77777777777", Steps)
Steps.Step = class Step extends Steps {
    constructor(props) {
        super(props);
        this.state = {
            a: 222
        }
        console.log("2222", props)
    }
    static defaultProps ={
      description: "描述信息",
      title: "标题",
      stateInfo: "状态信息"
    }
    static propTypes = {
      description: PropTypes.string,//步骤的详情描述，可选	string|ReactNode
      title: PropTypes.string, //标题	string|ReactNode	
      status: PropTypes.string, //指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
      stateInfo: PropTypes.string //步骤状态提示信息
    }
    render() {
        // console.log(444, this.props, Steps.props)
        let { stateInfo ,icon } = this.props,info;
        if(stateInfo == "已完成") {stateInfo = "";console.log("info=="+stateInfo)};
        let stateStyle = stateInfo == "未通过" ? {color:"orange"} : stateInfo == "审核中" ? {color:"#666"} : stateInfo == "信息有误" ? {color:"red"} : {color:"#666"}; 
        console.log(stateInfo)
        return <div className="ant-steps-item">
            
            {/* <div className="ant-steps-item-tail"></div>
            <div className="ant-steps-item-icon"><span className="ant-steps-icon">{icon}</span></div>
            <ThemeContext.Consumer>
                {value => {
                    console.log(value);
                    return   <div className="ant-steps-item-content">
                                <div className="ant-steps-item-title">
                                  {this.props.title}
                                  <span className="ant-steps-item-stateInfo" style={stateStyle}>{stateInfo}</span>
                                </div>
                                <div className="ant-steps-item-description">{this.props.description}</div>
                            </div>
                }}
            </ThemeContext.Consumer> */}
          
        </div>
    }
}
// Steps.Step.defaultProps = {
//     description: "描述信息",
//     title: "标题",
// }
// Steps.Step.propTypes = {
//     description: PropTypes.string,//步骤的详情描述，可选	string|ReactNode
//     title: PropTypes.string, //标题	string|ReactNode	
//     status: PropTypes.string, //指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
// }

export default Steps