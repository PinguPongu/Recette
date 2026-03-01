import React from "react";
import { RecipeSummary } from "../types/Recipe"
import RecipeCard from "./RecipeCard";


interface RecipeCardsProps {
  recipes: RecipeSummary[];
}

const RecipeCards = ({ recipes }: RecipeCardsProps) => {
  return (
    <div className="recipe-card-container">
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;