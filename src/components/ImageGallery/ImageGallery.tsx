import { FC } from "react";
import { Image } from "../../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImgSrc } from "../../App";

type Prop = {
  images: Image[];
  onSelect: (state: boolean, images: ImgSrc) => void;
};

const ImageGallery: FC<Prop> = ({ images, onSelect }) => {
  return (
    <ul className={css.imgList}>
      {images &&
        images.map((image) => (
          <li key={image.id} className={css.imgItem}>
            <ImageCard
              image={image}
              onSelect={(state, image) => onSelect(state, image)}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
