import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(
//mapStateToProps

state => ({num:state}),

//mapDispatchToProps -- the dispatch can also be a fuction and we do not need dispatch again.
{
  add : () => ({type : "ADD"})
}

)
(class ReactReduxPage extends Component {
		render() {
      console.log('props',this.props);
      const { num,add }= this.props;
			return (
				<div>
					<h3>ReactReduxPage</h3>
          <p>{num}</p>
          <button onClick = {add}> Add</button>
 				</div>
			);
		}
	}
);
