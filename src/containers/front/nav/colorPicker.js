import React, { Component } from 'react';
import { BlockPicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    if (!this.props.show) { 
      return null;
    }
    return (
      <div className="mr-color-picker">
        <BlockPicker></BlockPicker>
      </div>
    );
  }
}

export default ColorPicker;