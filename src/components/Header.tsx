import SearchFilter from "./SearchFilter";

interface HeaderProps {
  onSearchChange: (value: string) => void;
}

const Header = ({onSearchChange}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <SearchFilter onSearchChange={onSearchChange}/>

        <h1 className="header-title">Explore Recipes</h1>
      </div>
    </header>
  );
};

export default Header;