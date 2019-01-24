import React, { Component } from 'react';
import style from './style.module.scss';
import {
  Link
} from 'react-router-dom'
import { Input, Icon, Avatar, Menu, Dropdown, Button, Popover } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

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
const publishContent = (props) => {
  return (
    <div></div>
  );
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const mainColor = this.props.mainColor;
    return (
      <div className={style.nav_container}>
        <div className="left wrap">
          <div className="logo-cont mr-cursor">
          </div>
        </div>
        <div className="right wrap">
          <Popover content={publishContent} title="发布文章">
            <div className=" r-item">
              <Button type="primary" size="small" trigger="click" placement="bottom">发布</Button>
            </div>
          </Popover>
          <Dropdown overlay={menuCreater(mainColor)}>
            <div className="user-cont r-item">
                <Avatar style={{ backgroundColor: mainColor }} icon="user" />
            </div>
          </Dropdown>              
        </div>          
      </div> 
    );
  }
}

function mapStateToProps(state) {
    console.log('blogheaderState', state);
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
)(Header);
