import styles from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <header className={styles.header}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={onChange}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </header>
  );
}
