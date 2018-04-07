import React from "react";
import base from "./base";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			tried_auth: false,
		};
	}

	authenticate() {
		base.authWithOAuthPopup("google", (error, authData) => {
			// if (authData.user.email !== this.state.owner) {
			// 	this.setState({ tried_auth: true });
			// 	return null;
			// }
			console.log(authData);
			this.setState({ user_after_auth: authData.user.email });
		});
	}

	render_login() {
		const styles_login = {
			fontSize: "15vh",
		};
		return (
			<div className="full-page">
				<h1
					className="white-text vertical-center josefinSlab"
					style={styles_login}
				>
					{this.state.tried_auth ? "You are not Authorized" : "Login"}
					<br />
					<a
						className="btn btn-lg btn-outline-primary"
						onClick={() => this.authenticate()}
						style={{ cursor: "pointer" }}
					>
						<span style={{ color: "#fff", fontSize: "5vh" }}>
							Authenticate using Google
						</span>
					</a>
				</h1>
			</div>
		);
	}

	render() {
		return this.render_login();
	}
}
