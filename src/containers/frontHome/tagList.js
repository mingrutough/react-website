import React, { Component } from 'react';
import { Row, Col, Tag } from 'antd';

class TagList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedTag: '',
    };
    this.tagsArr = [
      '所有文章',
      'JavaScript',
      'NodeJs',
      'Css',
      'Vue'
    ];
  }
  handleTagItemClick = (choosedTag) => { 
    this.setState({
      choosedTag,
    });
  }
  render() {
    return (
      <div className="tag-container">
        {
          this.tagsArr.map((item) => { 
            return <Tag
              color={item === this.state.choosedTag ? '#ea6f5a' : ''} 
              key={item}
              onClick={this.handleTagItemClick.bind(this, item)}
            >{item}</Tag>
          })
        }
      </div>
    );
  }
}

export default TagList;