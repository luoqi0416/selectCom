import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./index.css";

class SelectCom extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            title: props.title || '',
            isShow: props.isShow || false,
            multiple: props.multiple || false,
            dataSource: props.dataSource || [],
            checkedItems: props.checkedItems || [],
            checkedArr: [],
        }
    }
    duiBIFn(obj, sourceArr) {
        let r = false;
        if (sourceArr.length === 0) {
            return r = false;
        } else {
            r = false;
            sourceArr.map(v => {
                // if (JSON.stringify(v) === JSON.stringify(obj)) {
                //     r = true
                // } 
                let item_r = true;
                Object.keys(v).map(item => {
                    if (v[item] !== obj[item]) {
                        item_r = false;
                    }
                })
                if (item_r) {
                    r = true
                }
            });
        return r;
        };
    }
    componentDidMount() {
        let checkedArr = []
        let { checkedItems, dataSource } = this.state;
        if (checkedItems.length) {
            dataSource.map((v, i) => {
                if (this.duiBIFn(v, checkedItems)) {
                    checkedArr.push(i)
                }
            })
        }
        this.setState({
            checkedArr
        })

    }
    componentWillReceiveProps(nextProps) {
        let checkedArr = []
        let { checkedItems, dataSource, isShow } = nextProps;
        this.setState({
            checkedItems: checkedItems || [],
            dataSource: dataSource || [],
            isShow
        }, () => {
            if (checkedItems.length) {
        console.log('checkedItems',checkedItems)

                dataSource.map((v, i) => {

                    if (this.duiBIFn(v, checkedItems)) {
                        checkedArr.push(i)
                    }
                })
            }
            this.setState({
                checkedArr
            })
        })
    }
    //确认
    onResult = () => {
        let { checkedArr, dataSource ,title} = this.state;
        console.log('checkedArr',checkedArr)
        let res = [];
        dataSource.map((v, i) => {
            if (checkedArr.indexOf(i) > -1) {
                res.push(v);
            }
        })
        this.props.onOk && this.props.onOk(res,title);
        this.props.onClose && this.props.onClose();
    }
    //取消或者蒙层关闭
    onCancel = () => {
        this.props.onClose&& this.props.onClose()
    }
    //选择变更
    onChoose = (index) => {
        let { multiple, checkedArr } = this.state;
        if (!multiple) {//单选
            this.setState({
                checkedArr: [index]
            });

        } else {//多选
            let ind = checkedArr.indexOf(index)
            if (ind == -1) {
                checkedArr.push(index)
            } else {
                if(checkedArr.length==1){
                    return;
                }
                checkedArr.splice(ind, 1)
            }
            this.setState({
                checkedArr
            })
        }
    }
    render() {
        let { title, checkedArr, dataSource, isShow } = this.state;

        return (
            <div className={`mask ${isShow ? 'active' : ''}`} onClick={this.onCancel}>
                <div className={`wrap ${isShow ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className='tit'>
                        <span onClick={this.onCancel}>取消</span>
                        <span>{title}</span>
                        <span onClick={() => this.onResult()}>确定</span>
                    </div>
                    <div className={`content`}>
                        <div>
                            {
                                dataSource.length ? dataSource.map((v, i) => {
                                    return <span
                                        className={`${checkedArr.indexOf(i) > -1 ? 'active' : ''}`}
                                        key={v.value}
                                        onClick={(e) => this.onChoose(i)}
                                    >{v.label}</span>
                                }) : '暂无数据'
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
SelectCom.defaultProps = {
    dataSource: [],
    checkedItems: [],
    title: "",
    multiple: false,//false为单选,
    isShow: false,
}
SelectCom.propTypes = {
    dataSource: PropTypes.array,//步骤的详情描述，可选	string|ReactNode
    checkedItems: PropTypes.array,//步骤的详情描述，可选	string|ReactNode
    title: PropTypes.string, //标题	string|ReactNode	
    multiple: PropTypes.bool, //指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
    isShow: PropTypes.bool, //指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
}

export default SelectCom