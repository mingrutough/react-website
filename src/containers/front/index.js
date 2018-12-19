import React, { Component } from 'react';
import NotFound from '@/components/404';
import FrontHome from '../frontHome';
import style from './style.module.scss';
import { Input, Icon, Avatar } from 'antd';
import { BlockPicker } from 'react-color';
import {
  Switch,
  Route
} from 'react-router-dom';

const Search = Input.Search;

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerStyle: {display: 'haha'},
    };
  }
  render() {
    return (
      <div>
        <div className={style.nav_container}>
          <div className="left wrap">
            <div className="logo-cont mr-cursor">
              我们的歌
            </div>
            <div className="search-cont">
              <Search
                placeholder="搜索"
                onSearch={value => console.log(value)}
                enterButton
                disabled
              />
            </div>
          </div>
          <div className="right wrap">
            <BlockPicker 
            style={{display:'none'}}
            className="mr-color-picker"></BlockPicker>            
            <div className="styleConf-cont r-item">
              <Icon 
              style={{fontSize: '24px', color: '#ea6f5a'}}
              type="bg-colors" />
            </div>
            <div className="user-cont r-item">
              <Avatar style={{ backgroundColor: '#ea6f5a' }} icon="user" />
            </div>
            <div className="newButton-cont r-item">
              <Icon 
              style={{fontSize: '26px', color: '#ea6f5a'}}              
              type="file-add" />
            </div>
          </div>          
        </div>
        <Switch>
          <Route path="/" exact component={FrontHome}></Route>
          <Route component={NotFound}></Route>                        
        </Switch>
      </div>
        
    );
  }
}

export default Front;
