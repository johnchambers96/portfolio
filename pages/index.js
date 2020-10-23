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

export async function getStaticPaths() {
  // fallback: true means that the missing pages
  // will not 404, and instead can render a fallback.
  return { paths: [], fallback: true };
}

const data = {
  header: "Hi, I'm John Chambers and I'm a Software Engineer",
  subHeader:
    "With 2+ years creating React.js applications within the gambling industry.",
};

const contactData = {
  header: "Do you have any questions or projects you would like to discuss?",
  subHeader:
    "If you have a project you would like to discuss or ask for advice, you can send me an email at <a href='mailto:cjohn772@gmail.com'>cjohn772@gmail.com</a>",
};
