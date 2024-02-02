import axios from "axios";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./App.css";
import { useEffect, useState } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

const ACCESS_KEY = "4rlYc7OxOpquUNz5ZpM2xWYkEAyrp43fA5mmXeVJ2z0";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`search/photos`, {
          params: {
            client_id: ACCESS_KEY,
            query: query,
            page: page,
            per_page: 10,
          },
        });

        setPage((prevPage) => prevPage + 1);
        setImages((prev) =>
          page === 1
            ? response.data.results
            : [...prev, ...response.data.results]
        );
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const handleNewSearch = (newQuery) => {
    if (newQuery !== query) setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleNewSearch} />
      <Toaster position="bottom-center" />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <button onClick={handleLoadMore}>Load more</button>
        </>
      )}
    </div>
  );
};
