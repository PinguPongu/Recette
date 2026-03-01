import React from "react";
import { Link } from "react-router-dom";
import { RecipeSummary } from "../types/Recipe";
import chickenIcon from "../icons/chicken.png";
import spicyIcon from "../icons/chili.png";
import fishIcon from "../icons/fish.png";
import kidIcon from "../icons/kid.png";
import meatIcon from "../icons/meat.png";

interface RecipeCardProps {
  recipe: RecipeSummary;
}

function iconForTag(tag: string): string {
  switch (tag) {
    case "Meat":
      return meatIcon;
    case "Chicken":
      return chickenIcon;
    case "Fish":
      return fishIcon;
    case "Spicy":
      return spicyIcon;
    case "KidFriendly":
      return kidIcon;
    default:
      return "";
  }
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const tags = recipe.tags.filter(
    (tag) => typeof tag.value === "boolean" && tag.value === true
  );

  return (
    <Link to={`/recipes/${recipe._id}`} className="recipe-card-link">
      <header className="recipe-card">
        <div className="recipe-card-content">
          <div className="recipe-card-image">
            <img
              src={`data:image/png;base64,${recipe.image}`}
              alt="Recipe"
              className="recipe-card-img"
            />
          </div>

          <div className="recipe-card-title">
            <p>{recipe.title}</p>
          </div>

          <div className="recipe-card-icon-container">
            {tags.map((tag) => (
              <img
                key={tag.key}
                src={iconForTag(tag.key)}
                alt={tag.key}
                className="recipe-card-icon"
              />
            ))}
          </div>
        </div>
      </header>
    </Link>
  );
};

export default RecipeCard;