import React from 'react';
import kakao from "../img/kakaoLogo.png";
import "../styles/ImgButton.css"

function ButtonKakao() {
    return (
        <button className="ImgButton"><img src={kakao} alt="KakaoImg"></img></button>
    )
}

export default ButtonKakao;