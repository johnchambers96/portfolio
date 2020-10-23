import { FlexBoxCenter } from "../../styles/global";
import {
  StyledOl,
  StyledLi,
  TimelineBall,
  TimelineContent,
  TimelineContentContainer,
} from "../../styles/timeline";

const Timeline = ({ content }) => {
  return (
    <FlexBoxCenter>
      <StyledOl>
        {content.map(({fields, sys}, index) => {
          return (
            <StyledLi key={index}>
              <TimelineBall />
              <TimelineContent>
                <TimelineContentContainer>
                  {/* Create a new component to handle the content */}
                </TimelineContentContainer>
              </TimelineContent>
            </StyledLi>
          );
        })}
      </StyledOl>
    </FlexBoxCenter>
  );
};
export default Timeline;
