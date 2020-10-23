import isNil from "lodash.isnil";
import { GlobalButton } from "../../styles/global";
import { ContactContainer, ContactP, ContactH2 } from "../../styles/contact";

const Contact = ({ content }) => {
  if (isNil(content) && isNil(content.fields)) return null;
  const { title, subTitle, buttonText } = content.fields;
  return (
    <ContactContainer>
      <ContactH2>{title}</ContactH2>
      {!isNil(subTitle) && (
        <ContactP dangerouslySetInnerHTML={{ __html: subTitle }} />
      )}
      <GlobalButton>{buttonText}</GlobalButton>
    </ContactContainer>
  );
};

export default Contact;
