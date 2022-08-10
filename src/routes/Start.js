import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Start.css";

function Start() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <img id="TitleImg" src={chatbot} alt="IMG" />
                <h1 id="Title">U-Friend</h1>
                <h2 id="SubTitle">유프렌즈에 오신 걸 환영합니다</h2>
                <div className="buttonDiv">
                    <Link to={"/SignUpEmail"}><Button text={"회원가입 →"} /></Link>
                    <Link to={"/Login"}><Button text={"로그인 →"} /></Link>
                </div>
                <div className="socialButtonDiv">
                    <ButtonGoogle />
                    <ButtonKakao />
                    <ButtonNaver />
                    <p id="Social">간편 소셜 로그인 방법</p>
                </div>
            </div>
        </div>
    );
}

export default Start;