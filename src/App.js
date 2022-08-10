import Start from './routes/Start';
import SignUpEmail from './routes/SignUpEmail';
import SignUpPassword from './routes/SignUpPassword';
import SignUpPhoneBirth from './routes/SignUpPhoneBirth';
import SignUpNickname from './routes/SignUpNickname';
import SignUpEnd from './routes/SignUpEnd';
import Login from './routes/Login';
import Main from './routes/Main';
import Chatbot from './routes/Chatbot';
import MyPage from './routes/MyPage';
import MiniGame from './routes/MiniGame';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/SignUpEnd" element={<SignUpEnd />} />
                <Route path="/SignUpNickname" element={<SignUpNickname />} />
                <Route path="/SignUpPhoneBirth" element={<SignUpPhoneBirth />} />
                <Route path="/SignUpPassword" element={<SignUpPassword />} />
                <Route path="/SignUpEmail" element={<SignUpEmail />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MiniGame" element={<MiniGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;