import { useRouter } from "next/router";
import { StyledContentContainer } from "../../styles/global";

export const Projects = () => {
  const router = useRouter();
  return <StyledContentContainer>{router.query.slug}</StyledContentContainer>;
};

export default Projects;
