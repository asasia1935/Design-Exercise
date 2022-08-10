import Header from "../components/Header";

function Chatbot() {
    return (
        <div>
            <div>
                <Header />
                <div>
                    {/* 대화 부분 */}
                </div>
                <div>
                    {/* 입력창 부분 */}
                    <input type="text"></input>
                    <button type="submit">전송</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;