import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
import TagList from './tagList';
import ArticleList from './articleList';
class FrontHome extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className={style.container}>
        <Row >
          <Col span={16} className="layout-col">
            <ArticleList></ArticleList>  
          </Col>
          <Col span={7} offset={1} className="layout-col">
            <TagList></TagList> 
          </Col>          
        </Row>
      </div>
    );
  }
}

export default FrontHome;