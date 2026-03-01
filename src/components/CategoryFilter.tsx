interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({selectedCategory, onSelectCategory}: CategoryFilterProps) => {
  const fields = [
    "ALL",
    "APPETIZERS",
    "STARTERS",
    "MAIN COURSES",
    "SIDE DISHES",
    "DESSERTS",
  ];

  return (
    <div className="category-filter-container">
      <div className="category-filter">
        {fields.map((word) => (
          <div
            key={word}
            onClick={() => (
              onSelectCategory(word))}
            className={
              selectedCategory === word
                ? "category-item active"
                : "category-item"
            }>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;