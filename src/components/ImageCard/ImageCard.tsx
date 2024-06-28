import { FC } from "react";
import { Image } from "../../../types";
import css from "./ImageCard.module.css";

type Prop = {
  image: Image;
  onSelect: (
    isOpen: boolean,
    image: { src: string; description: string }
  ) => void;
};

const ImageCard: FC<Prop> = ({ image, onSelect }) => {
  return (
    <div className={css.imgBox}>
      <img
        className={css.imgItem}
        src={image.urls.small || ""}
        alt={image.alt_description}
        onClick={() =>
          onSelect(true, {
            src: image.urls.regular || "",
            description: image.alt_description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
