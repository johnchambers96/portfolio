import { StyledContentContainer } from "../styles/global";
import Pitch from "../components/pitch";
import ControlPannel from "../components/controlPannel";
import get from "lodash.get";
import { ContentfulService } from "../core/contentful";
import { useSelector } from "react-redux";

export default function Home({ content }) {
  const {} = content;
  const pitchSettings = useSelector((state) => state.settings);

  return (
    <StyledContentContainer>
      <ControlPannel pitchSettings={pitchSettings} />
      <Pitch pitchSettings={pitchSettings} />
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
