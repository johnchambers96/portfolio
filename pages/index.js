import { StyledContentContainer } from "../styles/global";
import Header from "../components/header";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <StyledContentContainer>
      <Header content={data} />
      <Timeline />
      {/* Contact me */}
    </StyledContentContainer>
  );
}

const data = {
  header:
    "Hi, I'm John Chambers and I'm a Software Engineer",
  subHeader: "With 2+ years creating React.js applications within the gambling industry.",
};
