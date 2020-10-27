import { GalleryCard, GalleryImg, GalleryFooter } from "../../styles/gallery";
import Link from "next/link";

const Card = ({ title, subTitle, link, imgSrc, imgAlt }) => {
  return (
    <Link href={link}>
      <GalleryCard>
        <GalleryImg src={imgSrc} alt={imgAlt} />
        <GalleryFooter>
          <div className={"title"}>{title}</div>
          <div className={"subtitle"}>{subTitle}</div>
        </GalleryFooter>
      </GalleryCard>
    </Link>
  );
};

export default Card;
