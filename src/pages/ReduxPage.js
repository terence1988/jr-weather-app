import React, { Component } from "react";
import store from "../store/"

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
        console.log("State Changed");
        this.forceUpdate();{/*This force update the DOM */}
    })
  }
	render() {
    console.log(store);
		return (
			<div>
				<h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({type : "ADD"})}>add</button> {/*This changed the state but we didn't call reactDOM.render */}
			</div>
		);
	}
}
