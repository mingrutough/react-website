import React, { Component, PropTypes } from 'react';
import style from './style.module.scss';
import logInImg from './logIn_back.png';
import { Tabs } from 'antd';
import LogInform from './logInForm';
import RegisterForm from './registerForm';
const TabPane = Tabs.TabPane;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {login,register} = this.props;

    return (
      <div className={style.login_container} style={{ background: `url(${logInImg})` }}>
        <h1>我们的歌</h1>
        <Tabs defaultActiveKey="1" className={style.login_form_wrap}>
          <TabPane tab="登陆" key="1">
            <LogInform login={login}></LogInform>
          </TabPane>
          <TabPane tab="注册" key="2">
            <RegisterForm register={register}></RegisterForm>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Login;