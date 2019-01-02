import React, { Component } from 'react';
import style from './style.module.scss';
import {
  Link
} from 'react-router-dom'
import { Input, Icon, Avatar, Menu, Dropdown } from 'antd';
import ColorPicker from './colorPicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Search = Input.Search;
const flex = { display: 'flex', alignItems: 'center' };

const menuCreater = (mainColor) => { 
  const SNavStyle = {marginRight: '10px', color: mainColor};  
  return (
          <Menu>
            <Menu.Item>
              <Link style={flex} to="/my">
                <Icon type="user" style={SNavStyle}/>        
                主页
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link style={flex} to="/setting">
                <Icon type="setting" style={SNavStyle}/>
                设置
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a style={flex}>
                <Icon type="poweroff" style={SNavStyle}/>
                退出
              </a>
            </Menu.Item>
          </Menu>
        );
}
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerShow: false,
    };
    window.addEventListener('click', () => { 
      this.setState({
        colorPickerShow: false,
      });    
    });
  }
  toggleColorPickerShow = (e) => { // 官网上叫做属性初始化器语法。
    e.stopPropagation();
    this.setState({
      colorPickerShow: !this.state.colorPickerShow,
    });
  }
  render() {
    const mainColor = this.props.mainColor;
    return (
      <div className={style.nav_container}>
        <div className="left wrap">
          <div className="logo-cont mr-cursor">
            <Link to="/" style={{color: mainColor}}>
            我们的歌            
            </Link>
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
            style={{fontSize: '26px', color: mainColor}}
            type="bg-colors" />
          </div>
          <Dropdown overlay={menuCreater(mainColor)}>
            <div className="user-cont r-item">
                <Avatar style={{ backgroundColor: mainColor }} icon="user" />
            </div>
          </Dropdown>              
          <div className="newButton-cont r-item">
            <Link to="/newBlog">
              <Icon 
                style={{fontSize: '26px', color: mainColor}}              
              type="file-add" />  
            </Link>
          </div>
        </div>          
      </div>
        
    );
  }
}

function mapStateToProps(state) {
    console.log('Navstate', state);
    return {
        mainColor: state.global.mainColor,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // clear_msg: bindActionCreators(clear_msg, dispatch),
        // user_auth: bindActionCreators(user_auth, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
