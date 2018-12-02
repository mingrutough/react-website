import React, { Component, PropTypes } from 'react';
import NotFound from '@/components/404';
import FrontHome from '../frontHome';
import {
  Switch,
  Route
} from 'react-router-dom';

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={FrontHome}></Route>
          <Route component={NotFound}></Route>                        

        </Switch>
      </div>
        
    );
  }
}

export default Front;
