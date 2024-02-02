import toast from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
