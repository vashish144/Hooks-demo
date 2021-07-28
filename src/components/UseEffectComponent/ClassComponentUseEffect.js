import React, { Component } from "react";

class ClassComponentUseEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("fired componentDidMount");
    document.title = `Clicked ${this.state.count} time`;
  }
  componentDidUpdate() {
    console.log("fired componentDidUpdated");
    document.title = `Clicked ${this.state.count} time`;
  }
  render() {
    console.log("fired render Method");
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler}>click {count} time</button>
      </div>
    );
  }
}

export default ClassComponentUseEffect;
