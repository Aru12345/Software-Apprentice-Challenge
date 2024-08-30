import { TextField } from "@mui/material";

function Search({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search">
        <TextField
          id="filled-search"
          label="Search"
          type="search"
          className="input-search"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
export default Search;
