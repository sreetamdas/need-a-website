import React from "react";
import ProfileImage from "./ProfileImage";
import NameBranchCollege from "./NameBranchCollege";

export default class Introduction extends React.Component {
	constructor() {
		super();

		this.state = {
			NameBranchCollege: {
				name: null,
				branch: null,
				college: null,
			},
			other: "yolo",
			signed_in: false,
			admin: false,
			tried_auth: false,
		};
	}

	render_login() {
		const styles_login = {
			fontSize: "15vh",
		};
		return (
			<div className="full-page">
				<h1
					className="white-text vertical-center josefinSlab"
					// style={styles_login}
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
		return (
			<React.Fragment>
				<ProfileImage list={this.state.signed_in} />
				<NameBranchCollege list={this.state.NameBranchCollege} />
			</React.Fragment>
		);
	}
}
