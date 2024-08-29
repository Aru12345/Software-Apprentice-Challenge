function Sort({ sortOrder, setSortOrder }) {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort: </label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="all">All</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
export default Sort;
