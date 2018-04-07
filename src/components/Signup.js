import React from "react";
import Auth from "./Auth";
import Settings from "./Settings"

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			signed_in: false,
			// render_settings: false,
			signed_id_user: "",
		};

		this.set_signed_in_user = this.set_signed_in_user.bind(this);
	}

	set_signed_in_user = user =>
		this.setState({
			signed_id_user: user,
			signed_in: true,
		});


	render_settings() {
		return (
			<div className="full-page">
				<h1 className="white-text vertical-center josefinSlab">
					Add the following details
				</h1>
				<input type="text" />
			</div>
		);
	}

	

	render() {
		return <React.Fragment>
				{this.state.signed_in ? (
					<Settings email={this.state.signed_id_user}/>
				) : (
					<Auth state_manager={this.set_signed_in_user} />
				)}
			</React.Fragment>;
	}
}
