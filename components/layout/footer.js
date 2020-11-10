import { SmallText, FlexBoxCenter } from "../../styles/global";
import { StyledFooter } from "../../styles/footer";

const Footer = (props) => {
  return (
    <StyledFooter>
      <FlexBoxCenter>
        <SmallText>
          {"© 2020 JOHN CHAMBERS — DESIGNED AND DEVELOPED BY ME."}
        </SmallText>
      </FlexBoxCenter>
    </StyledFooter>
  );
};

export default Footer;
