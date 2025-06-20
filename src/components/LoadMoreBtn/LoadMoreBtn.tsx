import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

export default function LoadMoreBtn({ onClick, disabled }: LoadMoreBtnProps) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
}
