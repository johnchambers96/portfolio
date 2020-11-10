import { SmallText, FlexBoxCenter } from "../../styles/global";
import {
  StyledFooter,
  StyledImg,
  StyledA,
  StyledImgContainer,
} from "../../styles/footer";

const Footer = ({ theme }) => {
  return (
    <StyledFooter>
      <FlexBoxCenter>
        <StyledImgContainer>
          <StyledA href={"https://github.com/johnchambers96"} target="_blank">
            <StyledImg
              src={`./github-${theme.toLowerCase()}.svg`}
              alt={"github"}
            />
          </StyledA>
          <StyledA
            href={"https://www.linkedin.com/in/john-chambers-65a76515b/"}
            target="_blank"
          >
            <StyledImg
              src={`./linkedin-${theme.toLowerCase()}.svg`}
              alt={"linkedin"}
            />
          </StyledA>
          <StyledA href={`./resume-${theme.toLowerCase()}.svg`} download>
            <StyledImg src={`./resume-${theme.toLowerCase()}.svg`} alt={"cv"} />
          </StyledA>
        </StyledImgContainer>
        <SmallText>
          {"© 2020 JOHN CHAMBERS — DESIGNED AND DEVELOPED BY ME."}
        </SmallText>
      </FlexBoxCenter>
    </StyledFooter>
  );
};

export default Footer;
