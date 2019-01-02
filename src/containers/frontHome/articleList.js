import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton} from 'antd';
import {
  Link,
} from 'react-router-dom';
import ArticleListView from '@/components/articleList';
const count = 3;
class ArticleList extends Component {
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
      <ArticleListView
        initLoading={initLoading}
        loading={loading}
        list={list}        
        onLoadMore={this.onLoadMore}                
      ></ArticleListView>
    );
  }
}

export default ArticleList;