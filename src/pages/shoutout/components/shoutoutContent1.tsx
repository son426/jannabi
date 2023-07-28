import * as S from "./shoutoutContent1.style";
import * as M from "./mobile1.style";
import choi from "../../../data/images/shoutout/choi.png";
import kim from "../../../data/images/shoutout/kim.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Default, Mobile } from "../../../components/mediaquery";

function ShoutoutContent1() {
  const [selected, setSelected] = useState<number>(1);
  const [cardIndex, setCardIndex] = useState("0");

  const navigate = useNavigate();

  useEffect(() => {
    if (selected === 1) {
      setCardIndex("0");
    } else {
      setCardIndex("1");
    }
  }, [selected]);

  return (
    <>
      <Default>
        <S.Content1>
          <S.LogoDiv
            onClick={() => {
              navigate("/main");
            }}
          ></S.LogoDiv>
          <S.MarginDiv></S.MarginDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <S.Column>
              <S.Title>
                힙한 거, 쿨한 거 싫어요.{"\n"}그래서 가장 뜨거울{"\n"}우리들의
                여름밤.
              </S.Title>
              <S.SubTitle>
                잔나비는 2014년 데뷔한 대한민국의 록 밴드이다. 잔나비란
                원숭이라는 뜻의 순우리말로, 멤버 전원이 1992년생 원숭이띠라서
                붙여진 이름이다. 최정훈(보컬)과 김도형(기타)으로 구성된 2인조
                밴드이다.
              </S.SubTitle>
              <S.CheckBox>
                <S.CheckBoxRow
                  selected={selected === 1 ? true : false}
                  onClick={() => {
                    setSelected(1);
                  }}
                >
                  <p>VOCALIST</p>
                  <p>최정훈</p>
                </S.CheckBoxRow>
                <S.CheckBoxRow
                  selected={selected === 2 ? true : false}
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  <p>GUITARIST</p>
                  <p>김도형</p>
                </S.CheckBoxRow>
              </S.CheckBox>
            </S.Column>
            <S.Column>
              <S.Card
                img={kim}
                style={{ transform: "rotateZ(-10deg)", zIndex: cardIndex }}
              ></S.Card>
              <S.Card
                img={choi}
                style={{ transform: "rotateZ(10deg)" }}
              ></S.Card>
            </S.Column>
          </div>
        </S.Content1>
      </Default>
      <Mobile>
        <M.Content1>
          <M.LogoDiv
            onClick={() => {
              navigate("/main");
            }}
          ></M.LogoDiv>
          <M.MarginDiv></M.MarginDiv>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <M.Column>
              <M.Card
                img={kim}
                style={{ transform: "rotateZ(-10deg)", zIndex: cardIndex }}
              ></M.Card>
              <M.Card
                img={choi}
                style={{ transform: "rotateZ(10deg)" }}
              ></M.Card>
            </M.Column>
            <M.Column>
              <M.CheckBox>
                <M.CheckBoxRow
                  selected={selected === 1 ? true : false}
                  onClick={() => {
                    setSelected(1);
                  }}
                >
                  <p>VOCALIST</p>
                  <p>최정훈</p>
                </M.CheckBoxRow>
                <M.CheckBoxRow
                  selected={selected === 2 ? true : false}
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  <p>GUITARIST</p>
                  <p>김도형</p>
                </M.CheckBoxRow>
              </M.CheckBox>
            </M.Column>
          </div>
        </M.Content1>
      </Mobile>
    </>
  );
}

export default ShoutoutContent1;
