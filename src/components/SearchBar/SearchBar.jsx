import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }

    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
