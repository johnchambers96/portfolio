import { HeaderContainer, HeaderH1, HeaderP } from "../../styles/header";
import isNil from "lodash.isnil";

const Header = ({ content, children }) => {
  if (isNil(content)) return null;
  return (
    <HeaderContainer>
      <HeaderH1>{content.header}</HeaderH1>
      {!isNil(content.subHeader) && <HeaderP>{content.subHeader}</HeaderP>}
      {!isNil(children) && children}
    </HeaderContainer>
  );
};

export default Header;
