import {
  TimelineCardTitle,
  TimelineCardContent,
  TimelineCardLink,
} from "../../styles/timeline";
import moment from "moment";
import isNil from "lodash.isnil";
import Link from "next/link";

const formatDate = (start, end) => {
  const endDate = isNil(end) ? "Present" : moment(end).format("DD/MM/YY");
  return `${moment(start).format("DD/MM/YY")} - ${endDate}`;
};

const Card = ({ data }) => {
  const { title, startDate, endDate, jobTitle, slug } = data;
  return (
    <React.Fragment>
      <TimelineCardTitle>{formatDate(startDate, endDate)}</TimelineCardTitle>
      <TimelineCardContent>{`${title} - ${jobTitle}`}</TimelineCardContent>
      <Link href={`/career/${slug}`} passHref>
        <TimelineCardLink>{"Learn More"}</TimelineCardLink>
      </Link>
    </React.Fragment>
  );
};

export default Card;
