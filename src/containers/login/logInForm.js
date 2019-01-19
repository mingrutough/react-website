import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginFormCom extends Component {
  handleLogin = (e) => {
    const self = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        self.props.login(values.userName,values.password)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const wrapLayout = {
      wrapperCol:{
            offset: 2,
            span: 20
          }
    }
    return (
      <Form onSubmit={this.handleLogin} className="login-form">
        <FormItem
          {...wrapLayout}  
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your Phone Number!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
          )}
        </FormItem>
        <FormItem
          {...wrapLayout}  
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem
          {...wrapLayout}  
        >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(LoginFormCom);
export default LoginForm;
