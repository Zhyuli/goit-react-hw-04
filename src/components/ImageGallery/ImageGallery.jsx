import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="list">
      {images.map((image) => (
        <li className="listItem" key={image.id} onClick={() => onClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
