import React, { Component } from 'react';
import NotFound from '@/components/404';
import FrontHome from '../frontHome';
import style from './style.module.scss';
import Nav from './nav';
import {
  Switch,
  Route
} from 'react-router-dom';

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className={style.container}>
          <Switch>
            <Route path="/" exact component={FrontHome}></Route>
            <Route component={NotFound}></Route>                        
          </Switch>
        </div>
      </div>
    );
  }
}

export default Front;
