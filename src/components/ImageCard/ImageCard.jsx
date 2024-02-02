export const ImageCard = ({ image }) => {
  return (
    <div className="cardBox">
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};
