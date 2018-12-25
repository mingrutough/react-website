import React, { Component } from 'react';
import style from './style.module.scss';
import { Input, Icon, Avatar, Menu, Dropdown } from 'antd';
import ColorPicker from './colorPicker';

const Search = Input.Search;
const fNavStyle = {fontSize: '26px', color: '#ea6f5a'};
const SNavStyle = {marginRight: '10px', color: '#ea6f5a'};
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <Icon type="user" style={SNavStyle}/>        
        主页
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <Icon type="setting" style={SNavStyle}/>
        设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <Icon type="poweroff" style={SNavStyle}/>
        退出
      </a>
    </Menu.Item>
  </Menu>
);
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerShow: false,
    };
  }
  toggleColorPickerShow = () => { // 官网上叫做属性初始化器语法。
    this.setState({
      colorPickerShow: !this.state.colorPickerShow,
    });
  }
  render() {
    return (
      <div className={style.nav_container}>
        <div className="left wrap">
          <div className="logo-cont mr-cursor">
            我们的歌
          </div>
          <div className="search-cont">
          <Search
            disabled
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          </div>
        </div>
        <div className="right wrap">
          <ColorPicker show={this.state.colorPickerShow}></ColorPicker>
          <div className="styleConf-cont r-item" onClick={this.toggleColorPickerShow}>
            <Icon 
            style={fNavStyle}
            type="bg-colors" />
          </div>
          <Dropdown overlay={menu}>
            <div className="user-cont r-item">
                <Avatar style={{ backgroundColor: '#ea6f5a' }} icon="user" />
            </div>
          </Dropdown>              
          <div className="newButton-cont r-item">
            <Icon 
            style={fNavStyle}              
            type="file-add" />
          </div>
        </div>          
      </div>
        
    );
  }
}

export default Nav;
