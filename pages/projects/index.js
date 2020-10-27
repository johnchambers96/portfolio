import { StyledContentContainer } from "../../styles/global";
import { ContentfulService } from "../../core/contentful";
import Header from "../../components/header";
import Contact from "../../components/contact";
import Gallery from "../../components/gallery";
import get from "lodash.get";

export default function Projects({ content }) {
  const { header, contact, projects_content } = content;
  return (
    <StyledContentContainer>
      <Header content={header} />
      <Gallery content={projects_content} />
      <Contact content={contact} />
    </StyledContentContainer>
  );
}

export async function getStaticProps() {
  const contentfulService = new ContentfulService();
  const content = await contentfulService.getContentType("layoutProjects");
  return {
    revalidate: 1,
    props: { content: get(content, "items[0].fields", {}) },
  };
}
