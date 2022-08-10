import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PBalloon from "../components/PBalloon";

function SignUpEnd() {
    return (
        <div>
            <Header />
            <img src={chatbot} alt="ChatbotIMG" />
            <div>
                <PBalloon text={"친구가 되어줘서 고마워요! 이제 시작해볼까요?"} />
            </div>
            <div>
                <Link to={"/Login"}><button>로그인</button></Link>
            </div>
        </div>
    );
}

export default SignUpEnd;