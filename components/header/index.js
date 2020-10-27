import { HeaderContainer, HeaderH1, HeaderP } from "../../styles/header";
import isNil from "lodash.isnil";

const Header = ({ content }) => {
  if (isNil(content) && isNil(content.fields)) return null;
  const { title, subTitle } = content.fields;
  return (
    <HeaderContainer>
      <HeaderH1>{title}</HeaderH1>
      {!isNil(subTitle) && <HeaderP>{subTitle}</HeaderP>}
    </HeaderContainer>
  );
};

export default Header;
