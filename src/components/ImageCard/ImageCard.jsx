import css from "./ImageCard.module.css";

export const ImageCard = ({ image }) => {
  return (
    <div className={css.cardBox}>
      <img className={css.img} src={image.urls.small} alt={image.description} />
    </div>
  );
};
