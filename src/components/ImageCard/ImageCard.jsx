export const ImageCard = ({ image }) => {
  return (
    <div className="cardBox">
      <img src={image.urls} alt={image.description} />
    </div>
  );
};
