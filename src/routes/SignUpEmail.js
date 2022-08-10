import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import "../styles/SignUpEmail.css"

function SignUpEmail() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord />
                <div className="emailFormDiv">
                    <form>
                        <div>
                            <label htmlFor="Email">먼저 사용하실 이메일을 입력해주세요</label>
                        </div>
                        <div className="emailDiv">
                            <input className="emailField" id="Email" placeholder="이메일을 입력해주세요!" type="email" ></input>
                            <button>이메일 중복 확인</button>
                            <Link to={"/SignUpPassword"}><button id="nextToPasswordButton" type="submit" >계속하기</button></Link>
                        </div>
                    </form>
                </div>
                <div className="socialButtonDiv">
                    <ButtonGoogle />
                    <ButtonKakao />
                    <ButtonNaver />
                    <p>혹시 다른 계정으로 회원가입 하시겠어요?</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpEmail;