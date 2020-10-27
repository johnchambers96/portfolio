import { StyledContentContainer } from "../../styles/global";
import { ContentfulService } from "../../core/contentful";
import get from "lodash.get";

export const Projects = ({ content }) => {
  return <StyledContentContainer>{content.title}</StyledContentContainer>;
};

export default Projects;

export async function getStaticProps({ params }) {
  const contentfulService = new ContentfulService();
  const content = await contentfulService.getContentType("projects", params.slug);
  return {
    revalidate: 1,
    props: { content: get(content, "items.[0].fields", {}) },
  };
}

export const getStaticPaths = async () => {
  // const contentfulService = new ContentfulService();
  // const content = await contentfulService.getContentType("projects");
  // const paths = content.items.map((item) => {
  //   return { params: { slug: item.fields.slug } };
  // });
  return {
    paths: [],
    fallback: true,
  };
};
