import axios from "axios";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";

const ACCESS_KEY = "4rlYc7OxOpquUNz5ZpM2xWYkEAyrp43fA5mmXeVJ2z0";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageIsChosen, setImageIsChosen] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(`search/photos`, {
          params: {
            client_id: ACCESS_KEY,
            query: query,
            page: page,
            per_page: 10,
          },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleNewSearch = (newQuery) => {
    setPage(1);
    setQuery(newQuery);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // MODAL WINDOW

  const openModal = (image) => {
    setIsOpen(true);
    setImageIsChosen(image);
  };

  const closeModal = () => {
    setImageIsChosen(null);
    setIsOpen(false);
  };
  return (
    <div>
      <SearchBar onSearch={handleNewSearch} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={openModal} />
        </>
      )}
      <Toaster position="bottom-center" />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageIsChosen={imageIsChosen}
        />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};
