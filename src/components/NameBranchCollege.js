import React from "react"

export default class NameBranchCollege extends React.Component {

	render() {
		return(
			<h3>{this.props.list.college}</h3>
		);
	}
}