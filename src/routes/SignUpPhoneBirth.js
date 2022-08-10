import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import "../styles/SignUpPhoneBirth.css";

function SignUpPhoneBirth() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord />
                <div className="phoneBirthFormDiv">
                    <p id="phoneBirthP">나머지 정보도 알려주세요!</p>
                    <form>
                        <div>
                            <label htmlFor="PhoneNumber">전화번호</label>
                        </div>
                        <div>
                            <input className="phoneField" id="PhoneNumber" placeholder="010-0000-0000" ></input>
                        </div>
                        <div className="birthDiv">
                            <div>
                                <label htmlFor="Birth">생년월일</label>
                            </div>
                            <div>
                                <input className="birthField" id="Birth" placeholder="YYYY.MM.DD 양/음" type="date"></input>
                            </div>
                        </div>
                        
                        <div>
                            <Link to={"/SignUpNickname"}><button id="nextToNicknameButton" type="submit">계속하기</button></Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignUpPhoneBirth;