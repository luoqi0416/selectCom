import React, { Component } from 'react';
import SelectCom from './selectCom/index';
import './App.css';

let data = [{
  value: 0,
  label: '中文简体'
},
{
  value: 1,
  label: '中文繁体'
},
{
  value: 2,
  label: '藏语'
},
{
  value: 3,
  label: '藏语1'
},
{
  value: 4,
  label: '藏语2'
}, {
  value: 5,
  label: '藏语3'
},
{
  value: 6,
  label: '藏语4'
}];
let data1 = [{
  value: 0,
  label: 'APP应用1'
},
{
  value: 1,
  label: 'APP应用2'
},
{
  value: 2,
  label: 'APP应用3'
},
{
  value: 3,
  label: 'APP应用4'
},
{
  value: 4,
  label: 'APP应用5'
}, {
  value: 5,
  label: 'APP应用6'
},
{
  value: 6,
  label: 'APP应用7'
}];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,//弹框开关1
      isShow1: false,//弹框开关2
      yuYanarr: [{
        value: 2,
        label: '藏语'
      }, {
        value: 1,
        label: '中文繁体'
      }],
      fuwuArr: [{
        value: 5,
        label: 'APP应用6'
      }]
    }
  }
  //关闭弹框
  onClose = () => {
    this.setState({ isShow1: false, isShow: false })
  }
  //获取数据并关闭弹框
  onOK = (value, title) => {
    if (title === '选择语言') {
      this.setState({
        yuYanarr: value
      })
    } else if (title === '选择服务类型') {
      this.setState({
        fuwuArr: value
      })
    }
  }
  //触发打开弹框
  onShow = (keyI) => {
    let { isShow, isShow1 } = this.state;
    if (keyI === 1) {
      this.setState({ isShow: !isShow });
    } else if (keyI == 2) {
      this.setState({ isShow1: !isShow1 });
    }
  }

  render() {
    let { isShow, isShow1, yuYanarr,fuwuArr } = this.state;
    let dh1 = yuYanarr.length==1?1:0;
    let dh2 = fuwuArr.length==1?1:0;
    return (
      <div className="App">
        <h3>封装SelectCom</h3>
        <section style={{ height: '100%' }}>
          <h5>选择弹框</h5>
          <SelectCom
            title='选择语言'
            isShow={isShow}
            dataSource={data}
            checkedItems={yuYanarr}
            onClose={this.onClose}
            onOk={this.onOK}
            multiple={true}//true为多选
          />
          <SelectCom
            title='选择服务类型'
            isShow={isShow1}
            dataSource={data1}
            checkedItems={fuwuArr}
            onClose={this.onClose}
            onOk={this.onOK}
            multiple={false}//false为单选
          />
          <div className="right" onClick={() => this.onShow(1)}>
            <span>选择语言</span>
            <p style={{ margin: '0' }}>
              {
                yuYanarr.map((v, i) => {
                  return <span key={i}>{v.label}
                    {
                      (i!= 0&&dh1)?'' :i == (yuYanarr.length - 1)? '':'，'
                    }
                  </span>
                })

              }
            </p>
            <span>></span>
          </div>
          <div className="right" onClick={() => this.onShow(2)}>
            <span>选择服务内容</span>
            <p style={{ margin: '0' }}>
              {
                fuwuArr.map((v, i) => {
                  return <span key={i}>{v.label}
                    {
                      (i != 0&dh2) ? '' : i == (fuwuArr.length - 1) ? '' : '，'
                    }
                  </span>
                })

              }
            </p>
            <span>></span>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
