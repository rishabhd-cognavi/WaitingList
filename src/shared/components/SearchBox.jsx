import PropTypes from "prop-types";
import { Search } from "lucide-react";

function SearchBox({ search, setSearch }) {
  return (
    <div className="flex h-10 w-full items-center rounded border border-zinc-500 px-2 sm:w-fit">
      <Search className="text-gray-500" />
      <input
        value={search}
        className="ml-2 focus:outline-none"
        placeholder="Search User"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export { SearchBox };
