import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong! Try refreshing the page!",
}: ErrorMessageProps) {
  return <div className={styles.error}>{message}</div>;
}
