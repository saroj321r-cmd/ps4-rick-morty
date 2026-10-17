function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search character by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar
