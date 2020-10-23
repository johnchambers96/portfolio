import { FlexBoxCenter } from "../../styles/global";
import {
  StyledOl,
  StyledLi,
  TimelineBall,
  TimelineContent,
  TimelineContentContainer
} from "../../styles/timeline";

const Timeline = () => {
  return (
    <FlexBoxCenter>
      <StyledOl>
        <StyledLi>
          <TimelineBall />
          <TimelineContent>
            <TimelineContentContainer>{"content"}</TimelineContentContainer>
          </TimelineContent>
        </StyledLi>
        <StyledLi>
          <TimelineBall />
          <TimelineContent>
            <TimelineContentContainer>{"content"}</TimelineContentContainer>
          </TimelineContent>
        </StyledLi>
        <StyledLi>
          <TimelineBall />
          <TimelineContent>
            <TimelineContentContainer>{"content"}</TimelineContentContainer>
          </TimelineContent>
        </StyledLi>
        <StyledLi>
          <TimelineBall />
          <TimelineContent>
            <TimelineContentContainer>{"content"}</TimelineContentContainer>
          </TimelineContent>
        </StyledLi>
      </StyledOl>
    </FlexBoxCenter>
  );
};
export default Timeline;
