import React from "react";
import MainNav from "./MainNav";

const loader_styles = {
	fontSize: "15vh",
};
const Home = props => (
	<React.Fragment>
		<MainNav />
		<div className="full-page">
			<h1
				className="white-text vertical-center josefinSlab"
				style={loader_styles}
			>
				Need-a-Website 
			</h1>
		</div>
	</React.Fragment>
);

export default Home;
