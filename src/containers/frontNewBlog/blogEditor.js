import React, { Component } from 'react';
import E from 'wangeditor';

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    const editor = new E('#editorElem');
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    };
    editor.create();
  }
  render() {
    return (
      <div>
        <div id="editorElem"></div>
      </div>
    );
  }
}
export default BlogEditor;