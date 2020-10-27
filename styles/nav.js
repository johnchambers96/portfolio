import styled from "styled-components";

export const StyledNavBar = styled.nav`
  padding: 2rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: color 0.25s linear;
  padding-bottom: 4px;
  border-bottom: 4px solid transparent;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    border-bottom: 4px solid ${({ theme }) => theme.toggleBorder};
    transition: color 0.25s linear, border 0.25s linear;
  }
`;

export const StyledContaingDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  > :not(:last-child) {
    margin: 0px 1.4rem;
  }
  @media screen and (max-width: 780px) {
    > :not(:last-child) {
      margin: 0px 0.8rem;
    }
  }
`;

export const StyledIcon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
  margin: -8px 0px 0px 1.4rem;
  @media screen and (max-width: 780px) {
    margin: -8px 0px 0px 0.8rem;
  }
`;
