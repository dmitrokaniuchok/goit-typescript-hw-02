import ImageCard from "./ImageCard.jsx";
import styles from "./ImageGallery.module.css";
import { type UnsplashImage } from "../Api/types.js";

interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (imageURL: string) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={styles.containerList}>
      {images.map((image) => {
        return (
          <li className={styles.containerItem} key={image.id}>
            <ImageCard
              src={image.urls.small}
              alt={image.description}
              onClick={() => openModal(image.urls.regular)}
            />
          </li>
        );
      })}
    </ul>
  );
}
