import React from 'react';
import google from "../img/googleLogo.png";
import "../styles/ImgButton.css"

function ButtonGoogle() {
    return (
        <button className="ImgButton"><img src={google} alt="GoogleImg"></img></button>
    )
}

export default ButtonGoogle;