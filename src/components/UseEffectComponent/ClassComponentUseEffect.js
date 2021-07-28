import React, { Component } from "react";

class ClassComponentUseEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("fired componentDidMount");
    document.title = `Clicked ${this.state.count} time`;
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.count === this.state.count) {
      console.log("fired componentDidUpdated");
      document.title = `Clicked ${this.state.count} time`;
    }
  }
  render() {
    // console.log("fired render Method");
    const { count, name } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.clickHandler}>click {count} time</button>
      </div>
    );
  }
}

export default ClassComponentUseEffect;
