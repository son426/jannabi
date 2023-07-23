import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import Router from "./Router";

import PretendardBold from "./data/fonts/pretendard/pretendardbold.woff2";
import PretendardSemiBold from "./data/fonts/pretendard/pretendardsemibold.woff2";
import PretendardMedium from "./data/fonts/pretendard/pretendardmedium.woff2";
import PretendardThin from "./data/fonts/pretendard/pretendardthin.woff2";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  @font-face {
    font-family: 'PretendardBold';
    src: local('PretendardBold'), local('PretendardBold');
    font-style: normal;
    src: url(${PretendardBold}) format('woff2');
  }
  @font-face {
    font-family: 'PretendardSemiBold';
    src: local('PretendardSemiBold'), local('PretendardSemiBold');
    font-style: normal;
    src: url(${PretendardSemiBold}) format('woff2');
  }
  @font-face {
    font-family: 'PretendardThin';
    src: local('PretendardThin'), local('PretendardThin');
    font-style: normal;
    src: url(${PretendardThin}) format('woff2');
  }
  @font-face {
    font-family: 'PretendardBold';
    src: local('PretendardBold'), local('PretendardBold');
    font-style: normal;
    src: url(${PretendardBold}) format('woff2');
  }
 
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
