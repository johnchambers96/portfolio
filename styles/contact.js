import styled from "styled-components";
import { fadeInUp } from "./keyframes";

export const ContactContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  height: min-content;
`;

export const ContactH2 = styled.h1`
  color: ${({ theme }) => theme.text};
  line-height: 1;
  font-size: 32px;
  max-width: 46.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
  transition: all 0.25s ease-in-out 0s;
  animation: ${fadeInUp} .5s linear forwards;
  animation-delay: .75s;
  opacity: 0;
  @media screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const ContactP = styled.p`
  margin: 22px 0;
  width: 100%;
  transition: all 0.25s ease-in-out 0s;
  font-size: 21px;
  color: ${({ theme }) => theme.text};
  animation: ${fadeInUp} .5s linear forwards;
  animation-delay: .95s;
  opacity: 0;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    transition: all 0.25s ease-in-out 0s;
    &:hover {
      text-decoration: underline;
    }
  }
`;