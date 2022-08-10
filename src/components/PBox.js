import style from "../styles/P_box.module.css";
import PropTypes from "prop-types";

function PBox({text}) {
    return (
        <div className={style.div}>
            <p className={style.box}>{text}</p>
        </div>
    );
}

PBox.propTypes = {
    text: PropTypes.string.isRequired
}

export default PBox;