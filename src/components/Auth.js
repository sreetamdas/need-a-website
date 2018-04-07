import React from "react";
import base from "./base";

export default class Auth extends React.Component {
	authenticate = () =>
		base.authWithOAuthPopup("google", (error, authData) => {
			// if (authData.user.email !== this.state.owner) {
			// 	this.setState({ tried_auth: true });
			// 	return null;
			// }
			console.log(authData);
			// const email = authData.user.email;

			// const domain = email.split("@");
			if (authData.user.email.split("@")[1] === "student.nitw.ac.in") {
				// allow only NITW students
				console.log("Yes");
				// this.props.history.push("yoloing");
				let manager = this.props.state_manager;
				manager(authData.user.email);
			} else {
				console.log("No");
			}

			// this.setState({ user_after_auth: authData.user.email });
		});

	render() {
		const styles_login = {
			fontSize: "15vh",
		};

		return (
			<div className="full-page">
				<h1
					className="white-text vertical-center josefinSlab"
					style={styles_login}
				>
					Signup / Login
					<br />
					<a
						className="btn btn-lg btn-outline-primary"
						onClick={() => this.authenticate()}
						style={{ cursor: "pointer" }}
					>
						<span style={{ color: "#fff", fontSize: "5vh" }}>
							Sign in using Google
						</span>
					</a>
				</h1>
			</div>
		);
	}
}
