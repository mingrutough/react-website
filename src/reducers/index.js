import { combineReducers } from 'redux';

import front from './front'; // 前台的reducers
import admin from './admin'; // 后台的reducers
import globalState from './global'; // 所有组件共享的全局的reducers

export default combineReducers({
  front,
  admin,
  globalState,
});


