import styled from "styled-components";

export const ControlContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.secondaryBody};
  width: 300px;
  height: 600px;
  flex-direction: column;
  padding 0 7px;
`;

export const TabBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  margin: 7px 0;
`;

export const TabBarItem = styled.div`
  cursor: pointer;
  margin-bottom: 3px;
  padding: 6px;
  &.active {
    border-bottom: 3px solid #23DE9F;
    color: #23DE9F;
    margin: 0;
  }
`
