import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

interface LoaderProps {
  isOverlay: boolean;
}

export default function Loader({ isOverlay }: LoaderProps) {
  return (
    <div className={isOverlay ? styles.overlay : styles.centered}>
      <ClipLoader size={50} color="#28a745" />
    </div>
  );
}
