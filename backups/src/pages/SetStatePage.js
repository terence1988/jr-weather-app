import React, { Component } from "react";

export default class SetStagePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter : 0
		};
	}

  changeValue = v => {
    this.setState ({
      counter: this.state.counter + v
    });
    console.log("counter",this.state.counter);
  };
  setCounter = () => {
    this.changeValue(1);
  };

	render() {

		return (
			<div>
				<button onClick={this.setCounter}>{this.state.counter}</button>
			</div>
		);
	}
}
