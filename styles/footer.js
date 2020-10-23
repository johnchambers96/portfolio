import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 3.7rem 2rem;
`;

export const StyledImg = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const StyledA = styled.a`
  color: ${({ theme }) => theme.text};
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const StyledImgContainer = styled.div`
  margin-bottom: 40px;
`;
