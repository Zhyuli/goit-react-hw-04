import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({
  isOpen,
  onRequestClose,
  imageIsChosen: { urls, description, alt_description },
}) => {
  return (
    <div>
      <Modal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={css.overlay}
      >
        <button onClick={onRequestClose} className="closeButton">
          close
        </button>
        <div className="imageBox">
          <img
            className="img"
            src={urls.small}
            alt={alt_description}
            width={650}
          />
          <p className="text">{description}</p>
        </div>
      </Modal>
    </div>
  );
};
