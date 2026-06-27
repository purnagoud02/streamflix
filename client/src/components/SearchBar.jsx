function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search movies by title or genre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;