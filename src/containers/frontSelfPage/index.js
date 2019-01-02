// frontSelfPage

import React, { Component } from 'react';
import { Row, Col, Avatar, Tabs, Icon} from 'antd';
import ArticleListView from '@/components/articleList';

import style from './style.module.scss';

const TabPane = Tabs.TabPane;
const count = 3;

class SelfPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    }
  }
  componentDidMount() {
    this.getData((res)=> {
      this.setState({
        initLoading: false,
        data: res.data.array,
        list: res.data.array,
      });
    });
  }
  getData = (callback) => {
    $axios.get('front/articleList').then((res)=>{
      console.log(res);
      callback(res);
    }).catch();
  }
  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.data.array);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  render() {
    const { initLoading, loading, list} = this.state;
    return (
      <div className={style.container}>
        <Row >
          <Col span={24} className="layout-col">
            <div className="top-wrap">
              <Avatar size={80} icon="user" />
              <h2>夏明儒</h2>
              <ul className="detail-info">
                <li>
                  <div className="num">10</div>
                  <div className="meta-name">文章</div>                  
                </li>      
                <li>
                  <div className="num">10</div>
                  <div className="meta-name">文章</div>                  
                </li> 
                <li>
                  <div className="num">10</div>
                  <div className="meta-name">文章</div>                  
                </li> 
              </ul>
            </div>  
            <div className="bottom-wrap">
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="user" />我的文章</span>} key="1">
                  <ArticleListView
                    initLoading={initLoading}
                    loading={loading}
                    list={list}        
                    onLoadMore={this.onLoadMore}                
                  ></ArticleListView>
                </TabPane>
                <TabPane tab={<span><Icon type="like" />我喜欢的文章</span>} key="2">
                  <ArticleListView
                    initLoading={initLoading}
                    loading={loading}
                    list={list}        
                    onLoadMore={this.onLoadMore}                
                  ></ArticleListView>
                </TabPane>
              </Tabs>
            </div>              
          </Col>     
        </Row>
      </div>
    );
  }
}
export default SelfPage;