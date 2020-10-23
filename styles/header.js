import styled from "styled-components";
import { fadeInUp } from "./keyframes";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  height: min-content;
`;

export const HeaderH1 = styled.h1`
  color: ${({ theme }) => theme.text};
  line-height: 1;
  font-size: 64px;
  max-width: 46.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
  transition: all 0.25s ease-in-out 0s;
  animation: ${fadeInUp} .5s linear;
  @media screen and (max-width: 550px) {
    font-size: 11.5vw;
    line-height: 11.5vw;
  }
`;

export const HeaderP = styled.p`
  margin: 22px 0;
  width: 100%;
  transition: all 0.25s ease-in-out 0s;
  font-size: 21px;
  color: ${({ theme }) => theme.text};
  animation: ${fadeInUp} .5s linear forwards;
  animation-delay: .2s;
  opacity: 0;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
