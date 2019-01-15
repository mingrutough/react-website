import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import AvatarEditor from 'react-avatar-editor';

import style from "./style.module.scss";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class avatarEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      curImgFile: '',
    }
  }
  beforeUpload = (file) => {
    const self = this;
    const isValidImgType = /png|jpeg|jpg|gif/i.test(file.type);
    if (!isValidImgType) {
      message.error('You can only upload img file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    if (isValidImgType && isLt2M) { // 符合规则将图片展示
      self.setState({
        curImgFile: file
      });
    }
    return false;
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className={style.uploadImg}>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={this.beforeUpload}
        >
          {uploadButton}
        </Upload>
        <div className="edit">
          <AvatarEditor
            image={this.state.curImgFile}
            width={250}
            height={250}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
          />
        </div>
      </div>
    );
  }
}

export default avatarEditor;