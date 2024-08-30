import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
function Sort({ sortOrder, setSortOrder }) {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  //different options
  const sortOptions = [
    { value: "all", label: "All" },
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  return (
    <TextField
      id="filled-select-sort"
      select
      label="Sort"
      value={sortOrder}
      onChange={handleSortChange}
    >
      {sortOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
export default Sort;
