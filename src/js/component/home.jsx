import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter } from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center">
		<SecondsCounter />
		</div>
	);
};


export default Home;
