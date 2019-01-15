// frontSetting
import React, { Component } from 'react';
import { Row, Col, Avatar, Tabs, Icon, Upload, message } from 'antd';
import AvatarEdit from './avatarEdit.js';
import NickNameEdit from './nickNameEdit.js';
import PassWordEdit from './passWordEdit.js';
import style from './style.module.scss';

const TabPane = Tabs.TabPane;
class SelfSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={style.container}>
        <Row >
          <Col span={24} className="layout-col">  
            <Tabs defaultActiveKey="1" >
              <TabPane tab="修改头像" key="1">
                <AvatarEdit></AvatarEdit>                
              </TabPane>
              <TabPane tab="修改昵称" key="2">
                <NickNameEdit></NickNameEdit>
              </TabPane>
              <TabPane tab="修改密码" key="3">
                <PassWordEdit></PassWordEdit>
              </TabPane>
            </Tabs>  
          </Col>     
        </Row>
      </div>
    );
  }
}
export default SelfSetting;