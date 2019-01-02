import React, { Component } from 'react';
import { BlockPicker } from 'react-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '@/reducers/global';
const { set_main_color} = actions;

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.set_main_color = this.props.set_main_color;
  }
  handleColorChange = (color) => { 
    console.log(color.hex);
    this.set_main_color(color.hex);
  }
  render() {
    if (!this.props.show) { 
      return null;
    }
    return (
      <div className="mr-color-picker">
        <BlockPicker
          color={'#ea6f5a'}  
          onChangeComplete={this.handleColorChange}
        ></BlockPicker>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        set_main_color: bindActionCreators(set_main_color, dispatch),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPicker);