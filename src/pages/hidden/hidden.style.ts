import { styled } from "styled-components";
import images from "@/data/images/hidden";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${images.bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Pictures = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${images.pics});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
`;
