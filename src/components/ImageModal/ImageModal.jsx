import Modal from "react-modal";

Modal.setAppElement("#root");

export const ImageModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  imageIsChosen: { urls, description, alt_description },
}) => {
  return (
    <div>
      <Modal
        className="modal"
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
      >
        <button onClick={onRequestClose}>close</button>
        <div>
          <img src={urls.small} alt={alt_description} width={650} />
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  );
};
