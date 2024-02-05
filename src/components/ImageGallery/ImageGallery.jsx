import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li
          className={css.listItem}
          key={image.id}
          onClick={() => onClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
