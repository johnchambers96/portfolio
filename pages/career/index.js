import { StyledContentContainer } from "../../styles/global";
import { ContentfulService } from "../../core/contentful";
import Header from "../../components/header";
import Contact from "../../components/contact";
import Gallery from "../../components/gallery";
import get from "lodash.get";

export default function Career({ content }) {
  const { header, contact, careerHistory } = content;
  console.log(content);
  return (
    <StyledContentContainer>
      <Header content={header} />
      <Gallery content={careerHistory} />
      <Contact content={contact} />
    </StyledContentContainer>
  );
}

export async function getStaticProps() {
  const contentfulService = new ContentfulService();
  const content = await contentfulService.getContentType("layoutCareer");
  return {
    revalidate: 1,
    props: { content: get(content, "items[0].fields", {}) },
  };
}
