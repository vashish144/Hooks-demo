import React, { Component } from "react";

class MouseCodinateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        x-axis: {this.state.x} y-axis: {this.state.y}
      </div>
    );
  }
}

export default MouseCodinateClass;
