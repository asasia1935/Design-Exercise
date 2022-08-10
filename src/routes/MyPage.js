import Header from "../components/Header";

function MyPage() {
    return (
        <div>
            <Header />
            <div>
                <img src="" alt="ProfilImg" />
                <h4>닉네임</h4>
                <p>nickname</p>
                <button>닉네임 변경</button>
                <h4>레벨</h4>
                <p>lv.n</p>
            </div>
            <div>
                다이어리
            </div>
            <div>
                <p>현재 색상</p>
                <button>색 변경</button>
                <p>현재 글꼴</p>
                <button>글꼴 변경</button>
            </div>
        </div>
    );
}

export default MyPage;