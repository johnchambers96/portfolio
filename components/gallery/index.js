import { FlexBoxCenter } from "../../styles/global";
import { GalleryContainer } from "../../styles/gallery";

const Gallery = ({ children }) => {
  return (
    <FlexBoxCenter>
      <GalleryContainer>{children}</GalleryContainer>
    </FlexBoxCenter>
  );
};

export default Gallery;
