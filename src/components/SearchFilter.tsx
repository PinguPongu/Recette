import searchIcon from "../icons/magnifying-glass.png"

interface SearchFilterProps {
  onSearchChange: (value: string) => void;
}

const SearchFilter = ({ onSearchChange }: SearchFilterProps) => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <div className="search">
          <img src={searchIcon} alt="Search" className="search-icon"/>
          <input
            type="text"
            placeholder="Search for recipes"
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;