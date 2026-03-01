import React from "react";
import { RecipeSummary } from "../types/Recipe"
import RecipeCard from "./RecipeCard";


interface RecipeCardsProps {
  recipes: RecipeSummary[];
}

const RecipeCards = ({ recipes }: RecipeCardsProps) => {
  return (
    <div className="recipe-cards-container">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}/>
      ))}
    </div>
  );
};

export default RecipeCards;