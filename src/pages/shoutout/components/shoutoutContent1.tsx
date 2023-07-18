import * as S from "../shoutoutPage.style";
import choi from "../choi.png";
import kim from "../kim.png";

function ShoutoutContent1() {
  return (
    <S.Content1>
      <S.LogoDiv></S.LogoDiv>
      <S.MarginDiv></S.MarginDiv>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.Column>
          <S.Title>
            힙한 거, 쿨한 거 싫어요.{"\n"}그래서 가장 뜨거울{"\n"}우리들의
            여름밤.
          </S.Title>
          <S.SubTitle>
            잔나비는 2014년 데뷔한 대한민국의 록 밴드이다. 잔나비란 원숭이라는
            뜻의 순우리말로, 멤버 전원이 1992년생 원숭이띠라서 붙여진 이름이다.
            최정훈(보컬)과 김도형(기타)으로 구성된 2인조 밴드이다.
          </S.SubTitle>
          <S.CheckBox>
            <div>보컬리스트 최정훈</div>
            <div>기타리스트 김도형</div>
          </S.CheckBox>
        </S.Column>
        <S.Column>
          <S.Card img={kim} style={{ transform: "rotateZ(-10deg)" }}></S.Card>
          <S.Card img={choi} style={{ transform: "rotateZ(10deg)" }}></S.Card>
        </S.Column>
      </div>
    </S.Content1>
  );
}

export default ShoutoutContent1;
