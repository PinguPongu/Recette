import React from "react";
import { useParams } from "react-router-dom";
import { RecipeDetails as RecipeDetail } from "../types/Recipe"
import { fetchRecipeDetails } from "../data/fetchRecipes";
import { useEffect, useState } from "react";


const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipeDetails, setRecipe] = useState<RecipeDetail>();

  useEffect(() => {
    if (id) {
      fetchRecipeDetails(id).then((data) => {
        setRecipe(data);
      });
    }
  }, [id]);

  if (!recipeDetails) return <p>Loading...</p>;

  const calories = recipeDetails.tags.find(t => t.key === "Calories")?.value;
  const totalTime = recipeDetails.tags.find(t => t.key === "TotalMinutes")?.value

  return (
    <div className="recipe-details">
      <div className="recipe-details-image-container">
        <img src={`data:image/png;base64,${recipeDetails?.image}`} alt={recipeDetails?.description}/>
      </div>
      <div className="recipe-details-content">
        <div className="recipe-details-title">
          <h1>{recipeDetails?.title}</h1>
        </div>
        <div className="recipe-details-author">
          <p>By {recipeDetails?.author}</p>
        </div>
        <div className="recipe-details-stats">
          <div className="recipe-details-stat">
            <p>Calories</p>
            <p><strong>{calories} cal</strong></p>
          </div>
          <div className="recipe-details-stat">
            <p>Total time</p>
            <p><strong>{totalTime} min</strong></p>
          </div>
        </div>
        <div className="recipe-details-about">
          <h2>About recipe</h2>
          <h2>Ingredients</h2>
          <div className="recipe-details-instruction">
            <ul>
              {recipeDetails?.ingredients.map((ingredient) => (
                <li>{ingredient.ingredient}</li>
              ))}
            </ul>
          </div>
          <h2>Instructions</h2>
          <div className="recipe-details-instruction">
            <ol>
              {recipeDetails?.instructions.map((instruction) => (
                <li key={instruction.step}>
                  {instruction.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;