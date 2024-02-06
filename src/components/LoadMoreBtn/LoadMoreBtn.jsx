export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="loadMoreBtn">
      <button className="button" type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};
