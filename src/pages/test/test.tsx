import { useState } from "react";
import * as S from "./test.style";

function Test() {
  const [color, setColor] = useState("red");

  return (
    <>
      <S.MyDiv>테스트</S.MyDiv>
    </>
  );
}

export default Test;
