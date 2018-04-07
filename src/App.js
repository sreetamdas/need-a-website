import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/styles.css";
import MainNav from "./components/MainNav";
import Introduction from "./components/Introduction";
import Loader from "./components/Loader";
import base from "./components/base";
import NotFound from "./components/NotFound";

class App extends Component {
	constructor() {
		super();

		this.state = {
			signed_in: false,
			signed_in_user: null,
			// admin: false,
			loaded: false,
			error_404: false,
			data: {
				name: "yes",
			},
		};

		this.resolve_user = this.resolve_user.bind(this);
	}

	componentWillMount() {
		this.resolve_user(this.props.match.params.user);
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

	add_new() {
		// image, name, branch, college
	}

	resolve_user(userID) {
		let hashes = base.fetch(`/user-data/hash/${userID}`, {
			asArray: false,
			context: this,
			then(data) {
				if (!data) {
					this.setState({
						error_404: true,
					});
				}
				console.log(data);
				base.fetch(`/user-data/users/${data}`, {
					asArray: false,
					context: this,
					then(response) {
						console.log(response);
						this.setState({
							data: response,
							loaded: true,
						});
					},
				});
			},
		});
	}

	render() {
		let info = this.state.data;

		return (
			<React.Fragment>
				{this.state.error_404 ? (
					<NotFound />
				) : this.state.loaded ? (
					<h1 className="full-page white-text josefinSlab">
						{info.name}
						<br />
						{info.branch}
						<br />
						Batch of {info.year}
					</h1>
				) : (
					<Loader message="Loading" />
				)}
				<MainNav />
				<Introduction />
				{/* <Loader message="Hello World"/> */}
			</React.Fragment>
		);
	}
}

export default App;
