import styled from "styled-components";
import { fadeIn, fadeInUp } from "./keyframes";

export const StyledOl = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin: 2rem 0;
  padding: 0;
  list-style: none;
  animation: ${fadeIn} .5s linear forwards;
  opacity: 0;
  animation-delay .5s;
  &::before {
    content: "";
    position: absolute;
    width: 0.25em;
    height: 100%;
    background-color: ${({ theme }) => theme.secondaryBody};
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(${({ theme }) => theme.body}),
      color-stop(2%, ${({ theme }) => theme.secondaryBody}),
      color-stop(98%, ${({ theme }) => theme.secondaryBody}),
      to(${({ theme }) => theme.body})
    );
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.body} 0%,
      ${({ theme }) => theme.secondaryBody} 2%,
      ${({ theme }) => theme.secondaryBody} 98%,
      ${({ theme }) => theme.body} 100%
    );
  }
  @media screen and (max-width: 780px) {
    &::before {
      left: calc(100% - 0.25em);
    }
  }
`;

export const StyledLi = styled.li`
  margin: 2em 0;
  position: relative;
  width: 100%;
  animation: ${fadeInUp} .5s linear forwards;
  opacity: 0;
  animation-delay .5s;
  @media screen and (min-width: 781px) {
    &:nth-child(even) {
      > :last-child {
        float: right;
        &::before {
          left: -1em;
          right: auto;
          border-left: none;
          border-right: 1em solid ${({ theme }) => theme.secondaryBody};
        }
      }
    }
  }
  @media screen and (max-width: 780px) {
    div:first-child {
      left: calc(100% - 12px);
    }
    div:last-child {
      width: calc(100% - 2em);
    }
  }
`;

export const TimelineBall = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.toggleBorder};
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  transition: background-color 0.25s linear;
`;

export const TimelineContent = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryBody};
  width: calc(50% - 2em);
  position: relative;
  border-radius: 5px;
  -webkit-filter: drop-shadow(0px 2px 2px ${({ theme }) => theme.boxShadow});
  filter: drop-shadow(0px 2px 2px ${({ theme }) => theme.boxShadow});
  &::before {
    content: "";
    position: absolute;
    display: block;
    left: -1em;
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-right: 1em solid ${({ theme }) => theme.secondaryBody};
    left: auto;
    right: -1em;
    border-left: 1em solid ${({ theme }) => theme.secondaryBody};
    border-right: none;
    top: calc(50% - 16px);
  }
`;

export const TimelineContentContainer = styled.div`
  padding: 9px;
  box-sizing: border-box;
  height: 100%;
  min-height: 120px;
  width: 100% !important;
`;

export const TimelineCardTitle = styled.p`
  margin: 0;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 300;
`;

export const TimelineCardContent = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  height: 65px;
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

export const TimelineCardLink = styled.a`
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.toggleBorder};
  float: right;
`;
