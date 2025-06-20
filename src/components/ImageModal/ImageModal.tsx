import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <img src={imageUrl} alt="Image preview" />
      </div>
    </Modal>
  );
}
