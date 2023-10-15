import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState({ isColorListVisible: !this.state.isColorListVisible });
  }

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false, // Close the color list when a color is selected
    });
  }

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p>You've selected: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;
