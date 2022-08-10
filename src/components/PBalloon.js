import style from "../styles/P_balloon.module.css";
import PropTypes from "prop-types";

function PBalloon({text}) {
    return <p className={style.balloon}>{text}</p>
}

PBalloon.propTypes = {
    text: PropTypes.string.isRequired
}

export default PBalloon;