import React from 'react';
import PropTypes from "prop-types";
import "../styles/Button.css"

function Button({text}) {
    return (
        <button className="button">{text}</button>
    )
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

export default Button;