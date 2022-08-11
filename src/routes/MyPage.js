import Header from "../components/Header";
import "../styles/MyPage.scss"

function MyPage() {
    return (
        <>
            <Header />
            <section>
                <div>
                    <div className="box">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="ProfilImg" />
                    </div>
                    <div className="content">
                        <div className="contentBox">
                            <article>
                                <h4>닉네임</h4>
                                <p>nickname</p>
                            </article>
                            <article>
                                <button>닉네임 변경</button>
                            </article>
                        </div>
                        <div className="contentBox">
                            <article>
                                <h4>레벨</h4>
                                <p>lv.n</p>
                            </article>
                        </div>
                    </div>
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
            </section>
        </>
    );
}

export default MyPage;