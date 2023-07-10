import * as S from "./intro.style";

function Intro() {
  return (
    <>
      <div>
        <S.StyledLink to="/main">
          <S.Img src="images/intro.jpg" />
        </S.StyledLink>
      </div>
    </>
  );
}

export default Intro;
