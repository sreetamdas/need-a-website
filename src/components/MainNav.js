import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class MainNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			dev: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<div className="black-bg">
				<Navbar
					className="bg-transparent"
					light
					expand="md"
					fixed="top"
				>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<LinkContainer to="/login">
									<NavLink className="white-text josefinSlab nav-link-text">
										Login or Signup
									</NavLink>
								</LinkContainer>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
