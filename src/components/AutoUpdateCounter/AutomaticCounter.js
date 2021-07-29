import React, { Component } from "react";

class AutomaticCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isDisplay: true,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
        count: this.state.count + 1,
    });
  };
  toggleHandler = () => {
    this.setState({ isDisplay: !this.state.isDisplay });
  };
  render() {
    const { count, isDisplay } = this.state;
    return (
      <div>
        <button onClick={this.toggleHandler}>ToggelCount</button>
        {isDisplay && <h1>count: {count}</h1>}
      </div>
    );
  }
}

export default AutomaticCounter;
