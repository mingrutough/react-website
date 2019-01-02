import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton} from 'antd';
import {
  Link,
} from 'react-router-dom';

class ArticleListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { initLoading, loading, list, onLoadMore } = this.props;
    const loadMore = !initLoading && !loading ? (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
    return (
      <div className="article-container">
      <List
        className="loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Link to="/blog/haha">{item.title}</Link>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
      />
      </div>
    );
  }
}

export default ArticleListView;