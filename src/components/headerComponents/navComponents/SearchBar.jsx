import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <form
        action="#"
        className="search-form d-flex align-items-center"
        method="post">
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          required
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
