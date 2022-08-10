import React from 'react';
import naver from "../img/naverLogo.png";
import "../styles/ImgButton.css"

function ButtonNaver() {
    return (
        <button className="ImgButton"><img src={naver} alt="NaverImg"></img></button>
    )
}

export default ButtonNaver;