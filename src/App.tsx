import { useState, useEffect } from "react";
import { fetchImages } from "./components/Api/api";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { UnsplashImage } from "./components/Api/types";

export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasError, setHasError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setHasError(false);

    fetchImages(query, page)
      .then((data) => {
        if (data.results.length === 0 && page === 1) {
          toast.error("No images found.");
        }
        setImages((prev) => [...prev, ...data.results]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, [query, page]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!inputValue.trim()) {
      toast.error("Please enter an image name to search!");
      return;
    }
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setInputValue("");
    setHasError(false);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
        onSubmit={handleSubmit}
      />

      {hasError && (
        <ErrorMessage message="Something went wrong! Try refreshing the page!" />
      )}

      {images.length > 0 && !hasError && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isLoading && <Loader isOverlay={false} />}

      {images.length > 0 && !isLoading && !hasError && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}
