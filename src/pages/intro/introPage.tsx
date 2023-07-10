import * as S from "./introPage.style";

function IntroPage() {
  return (
    <>
      <S.StyledLink to="/main">
        <S.Img src="images/intro.jpg" />
      </S.StyledLink>
    </>
  );
}

export default IntroPage;
