import styled from "styled-components";
import { fadeInUp } from "./keyframes";

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const GalleryCard = styled.div`
  background-color: ${({ theme }) => theme.secondaryBody};
  border-radius: 5px;
  width: 100%;
  max-width: 320px;
  margin: 12px 9px;
  cursor: pointer;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 9px;
  box-sizing: border-box;
  transition: margin 500ms ease-in-out;
  color: ${({ theme }) => theme.text};
  animation: ${fadeInUp} 0.5s linear forwards;
  animation-delay: .5s;
  opacity: 0;
  @media screen and (max-width: 780px) {
    max-width: 100%;
  }
  &:hover {
    margin-top: 5px;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const GalleryImg = styled.img`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: inherit;
  min-height: inherit;
  min-width: 100%;
  border-radius: 5px;
  height: 180px;
  min-height: 180px;
`;

export const GalleryFooter = styled.div`
  padding: 9px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    font-size: 16px;
    font-weight: 600;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 300;
    min-width: 0;
  }
`;
