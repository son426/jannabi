import { Link } from "react-router-dom";
import * as S from "./mainPage.style";

function MainPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>정규앨범</h1>
        <Link to="/regularDetail/1">1번앨범</Link>
        <Link to="/regularDetail/2">2번앨범</Link>
        <Link to="/regularDetail/3">3번앨범</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>비정규앨범</h1>
        <Link to="/irregularDetail/1">1번앨범</Link>
        <Link to="/irregularDetail/2">2번앨범</Link>
        <Link to="/irregularDetail/3">3번앨범</Link>
      </div>
    </>
  );
}

export default MainPage;
