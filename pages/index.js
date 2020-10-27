import { StyledContentContainer } from "../styles/global";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Contact from "../components/contact";
import get from "lodash.get";
import { ContentfulService } from "../core/contentful";

export default function Home({ content }) {
  const { header, contact, timeline } = content;
  return (
    <StyledContentContainer>
      <Header content={header} />
      <Timeline content={timeline} />
      <Contact content={contact} />
    </StyledContentContainer>
  );
}

export async function getStaticProps() {
  const contentfulService = new ContentfulService();
  const content = await contentfulService.getContentType("layoutHome");
  return {
    revalidate: 1,
    props: { content: get(content, `items.[0].fields`, {}) },
  };
}
