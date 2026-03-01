import React from "react";
import searchIcon from "../icons/magnifying-glass.png"

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="search-wrapper">
          <img src={searchIcon} alt="Search" className="search-icon"/>
          <input
            type="text"
            placeholder="Search for recipes"
            // value={searchValue}
            // onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        <h1 className="header-title">Explore Recipes</h1>
      </div>
    </header>
  );
};

export default Header;