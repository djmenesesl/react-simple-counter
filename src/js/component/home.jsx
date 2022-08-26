import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
    return (
        <div className="text-center d-flex justify-content-center">
            <div className="bigCounter d-flex fs-1 gap-4 text-light bg-black w-25 justify-content-center">
                <div className="Clock ps-5"><i className="fa-regular fa-clock"></i></div>
                <div className="Seis">{props.digitSix % 10}</div>
                <div className="Cinco">{props.digitFive % 10}</div>
                <div className="Cuatro">{props.digitFour % 10}</div>
                <div className="Tres">{props.digitThree % 10}</div>
                <div className="Dos">{props.digitTwo % 10}</div>
                <div className="Uno pe-5">{props.digitOne % 10}</div>
            </div>
        </div>
    );

};

Home.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
}

export default Home;
