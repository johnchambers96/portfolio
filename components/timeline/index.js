import { FlexBoxCenter } from "../../styles/global";
import {
  StyledOl,
  StyledLi,
  TimelineBall,
  TimelineContent,
  TimelineContentContainer,
} from "../../styles/timeline";
import Card from "./Card";

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
                  <Card data={fields} />
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
