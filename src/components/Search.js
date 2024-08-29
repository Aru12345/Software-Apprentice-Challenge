function Search({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Search</h1>
      <div className="search">
        <input placeholder="Search" value={search} onChange={handleSearch} />
      </div>
    </>
  );
}
export default Search;
