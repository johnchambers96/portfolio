import { StyledContentContainer } from "../styles/global";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Contact from "../components/contact";
import get from "lodash.get";

const client = require("contentful").createClient({
  space: "i0s1gpf5n765",
  accessToken: "tJ5D8w26pBZu_K7S2CxXpACoPGqeAF46N9kLQxoMv7M",
});

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
  const content = await client.getEntries({
    content_type: "layoutHome",
  });

  return {
    revalidate: 1,
    props: { content: get(content, `items.[0].fields`, {}) },
  };
}
