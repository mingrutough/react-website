import React, { Component } from 'react';
import { Form, Input, Select, Radio} from 'antd';
import style from './style.module.scss';

import BlogEditor from './blogEditor';
import Header from './header';


const FormItem = Form.Item;
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
class NewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={style.container}>
        <Header></Header>
      </div>
    );
  }
}
export default NewBlog;