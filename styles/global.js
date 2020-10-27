import styled, { createGlobalStyle } from "styled-components";
import { fadeInUp } from "./keyframes";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body, #__next {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    min-height: -webkit-fill-available;
    min-height: 100vh;
    width: 100%;
    margin: auto;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    opacity: 1;
    transition: color 0.25s linear;
    max-width: 1136px;
  }`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0 2rem;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SmallText = styled.p`
  font-size: small;
`;

export const FlexBoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GlobalButton = styled.a`
  background-color: ${({ theme }) => theme.toggleBorder};
  color:  ${({ theme }) => theme.body};
  animation: ${fadeInUp} .5s linear forwards;
  animation-delay: 1s;
  opacity: 0;
  padding: 20px;
  width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  width: -moz-fit-content;    /* Firefox/Gecko */
  width: -webkit-fit-content; /* Chrome */
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9)
  }
`;
