import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import apiSearch from "./components/services/services";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Image } from "../types";

export type ImgSrc = {
  src: string;
  description: string;
};

export type Api = {
  results: Image[];
  total_pages: number;
};

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedImg, setSelectedImg] = useState<ImgSrc>({
    src: "",
    description: "",
  });

  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        const { results, total_pages } = (await apiSearch(query, page)) as Api;
        if (results.length === 0) {
          return toast.error("This didn't work.");
        }
        setLoadMoreBtn(total_pages > page);

        setImages((prevImages) => [...prevImages, ...results]);
      } catch (error) {
        toast.error("This didn't work.");
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const searchQuery = (search: string) => {
    setIsLoading(true);
    setQuery(search);
    setLoadMoreBtn(false);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const openModal = (state: boolean, images: ImgSrc) => {
    setIsModalOpen(true);
    if (state) setSelectedImg(images);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Toaster position="top-center" />
      <SearchBar searchQuery={searchQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} onSelect={openModal} />
      {loadMoreBtn && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImg}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
