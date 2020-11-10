import styled from "styled-components";

export const PitchBG = styled.div`
  background-size: 432px 600px;
  height: 600px;
  width: 432px;
  position: relative;
`;

export const PitchContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.8);
  }
`;

export const PitchPlayer = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  cursor: move;
  z-index: 9999;
`;

export const PitchUrl = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 15px;
`;

export const PitchShirt = styled.img`
  height: 48px;
  width: 48px;
  user-drag: none;
`;

export const PitchPlayerContainer = styled.div`
  position: relative;
  height: 48px;
`;

export const PitchPlayerNum = styled.div`
  position: absolute;
  top: 12px;
  text-align: center;
  width: 100%;
  left: 0;
`;

export const PitchPlayerName = styled.input`
  position: absolute;
  top: 100%;
  width: 86px;
  left: -20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 5px;
  text-align: center;
  color: white;
`;
