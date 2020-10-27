import { GalleryCard } from "../../styles/gallery";
import isNil from "lodash.isnil";

const Card = ({ data }) => {
  console.log(data);
  return (
    <GalleryCard>
      <img />
      <div>{"title"}</div>
      <div>
        {
          "some text which should be too long for this container. some text which should be too long for this container. some text which should be too long for this container. some text which should be too long for this container."
        }
      </div>
      <div>{"Read More"}</div>
    </GalleryCard>
  );
};

export default Card;
