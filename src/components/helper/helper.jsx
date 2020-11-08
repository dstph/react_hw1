import React, { Component } from 'react';
import { render } from 'react-dom';
import './helper-style.css'

class HelperComponent extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className="helper-style">
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Help
        </div>
        {this.state.isHovering && <div>{this.text}</div>}
      </div>
    );
  }
}

export default HelperComponent;
