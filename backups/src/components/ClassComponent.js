import React, { Component } from "react";

export default class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	render() {
		const { date } = this.state;
		return (
			<div>
				<h3>The date is {date.toLocaleTimeString()}</h3>
			</div>
		);
	}
}
