import { useEffect, useState } from "react";
import Header from "./Header";
import RecipeCards from "./RecipeCards";
import { fetchRecipeSummaries } from "../data/fetchRecipes";
import { RecipeSummary } from "../types/Recipe";
import CategoryFilter from "./CategoryFilter";
import Loading from "./Loading";


const categoryMap: Record<string, string> = {
  "69a4485cffcfc35542c9cf31": "Appetizers",
  "69a4485cffcfc35542c9cf32": "Starters",
  "69a4485cffcfc35542c9cf33": "Main Courses",
  "69a4485cffcfc35542c9cf34": "Side dishes",
  "69a4485cffcfc35542c9cf35": "Desserts"
}


function Home() {
  const [recipes, setRecipes] = useState<RecipeSummary[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchRecipeSummaries().then((data) => {
      setRecipes(data);
    });
  }, []);

  if (!recipes) return <Loading/>

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      recipe.recipeType.toUpperCase() === selectedCategory;

    const matchesSearch =
      recipe.title.toLowerCase().includes(searchValue.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="Home">
      <Header onSearchChange={setSearchValue}/>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="recipes-to-explore">
        <p>You have <strong>{filteredRecipes.length}</strong> recipes to explore</p>
      </div>
      <RecipeCards recipes={filteredRecipes}/>
    </div>
  );
}

export default Home;