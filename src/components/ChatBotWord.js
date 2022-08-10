import chatbot from "../img/chatbot.png";
import PBox from "../components/PBox";
import "../styles/ChatBotWord.css"

function ChatBotWord() {
    return (
        <div>
            <img id="TitleImg" src={chatbot} alt="ChatbotIMG" />
            <div>
                <PBox text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
            </div>

        </div>
    );
}
export default ChatBotWord;