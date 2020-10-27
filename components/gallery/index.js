import { FlexBoxCenter } from "../../styles/global";
import { GalleryContainer } from "../../styles/gallery";
import Card from "./card";

const Gallery = ({ content }) => {
  return (
    <FlexBoxCenter>
      <GalleryContainer>
        {content.map((item, index) => (
          <Card key={index} data={item.fields} />
        ))}
      </GalleryContainer>
    </FlexBoxCenter>
  );
};

export default Gallery;
