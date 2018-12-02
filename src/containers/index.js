import React, { Component, PropTypes } from 'react';
import NotFound from '@/components/404';
import Front from './front';
import Admin from './admin';
import Login from './login';

import '../style/reset.css';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../reducers/global';
const {clear_msg, user_auth} = actions;



class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>                                                                                            
                        <Route path="/admin" component={Admin}></Route>      
                        <Route path="/login" exact component={Login}></Route>                                                                        
                        <Route component={Front}></Route>                        
                    </Switch>
                </div>    
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        notification: state.globalState.msg,
        isFetching: state.globalState.isFetching,
        userInfo: state.globalState.userInfo,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        clear_msg: bindActionCreators(clear_msg, dispatch),
        user_auth: bindActionCreators(user_auth, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

