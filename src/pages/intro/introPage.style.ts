import styled from "styled-components";
import { Link } from "react-router-dom";

export const Img = styled.img`
  width: 20vw;
  transform: scale(1) translate(0, 0);
  transition: transform 0.35s;
  -o-transition: transform 0.35s; /* opera */
  -ms-transition: transform 0.35s; /* IE 10 */
  -moz-transition: transform 0.35s; /* Firefox */
  -webkit-transition: transform 0.35s; /*safari and chrome */

  &:hover {
    transform: scale(1.2) translate(0, -90px);
    background-color: black;
    transition: transform color 0.35s;
    -o-transition: transform color 0.35s; /* opera */
    -ms-transition: transform color 0.35s; /* IE 10 */
    -moz-transition: transform color 0.35s; /* Firefox */
    -webkit-transition: transform color 0.35s; /*safari and chrome */
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;
