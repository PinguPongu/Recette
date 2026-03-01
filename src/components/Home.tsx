import { useEffect, useState } from "react";
import Header from "./Header";
import RecipeCards from "./RecipeCards";
import { fetchRecipeSummaries } from "../data/fetchRecipes";
import { RecipeSummary } from "../types/Recipe";


function Home() {
  const [recipes, setRecipes] = useState<RecipeSummary[] | null>(null);

  useEffect(() => {
    fetchRecipeSummaries().then((data) => {
      setRecipes(data);
    });
  }, []);

  if (!recipes) return <p>Loading...</p>

  return (
    <div className="Home">
      <Header/>
      <div className="recipes-to-explore">
        <p>You have <strong>{recipes.length}</strong> recipes to explore</p>
      </div>
      <RecipeCards recipes={recipes}/>
    </div>
  );
}

export default Home;