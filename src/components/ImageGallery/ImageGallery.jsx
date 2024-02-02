import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images }) => {
  return (
    <ul className="list">
      {images.map((image) => (
        <li className="listItem" key={image.id}>
          <ImageCard image={images} />
        </li>
      ))}
    </ul>
  );
};
