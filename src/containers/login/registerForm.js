import React, { Component, PropTypes } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, message } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
  };
  register = (params) => {
    $axios.post('register', params).then((res) => { 
      if (res.data.callStatus === 'SUCCEED') { 
        message.success('注册成功!');
      }
    });
  }
  handleSubmit = (e) => {
    const self = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        self.register(values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('passWord')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 9,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 10,
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
      <Form onSubmit={this.handleSubmit} className="register-form"> 
        <FormItem
          {...formItemLayout}
          label="Invite Code"
          hasFeedback
        >
          {getFieldDecorator('inviteCode', {
            rules: [{ required: true, message: 'Please input your Invite Code!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
          hasFeedback
        >
          {getFieldDecorator('phoneNumber', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('passWord', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Nickname"
          hasFeedback
        >
          {getFieldDecorator('nickName', {
            rules: [{ required: true, message: 'Please input your nickname!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" >Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const RegisterForm = Form.create()(RegistrationForm);

export default RegisterForm;