
export type Tag =
  | { key: "Calories"; value: number }
  | { key: "TotalMinutes"; value: number }
  | { key: "Meat"; value: boolean }
  | { key: "Chicken"; value: boolean }
  | { key: "Fish"; value: boolean }
  | { key: "Spicy"; value: boolean }
  | { key: "KidFriendly"; value: boolean };

type Instruction = {
  step: number,
  description: string
}

type Ingredient = {
  ingredient: string
}

export type RecipeDetails = {
  _id: string,
  title: string,
  description: string,
  author: string,
  image: string,
  recipeType: "Appetizers" | "Main Courses" | "Side dishes" | "Starters" | "Desserts",
  tags: Tag[]
  instructions: Instruction[],
  ingredients: Ingredient[]
}


export type RecipeSummary = {
  _id: string,
  title: string,
  image: string,
  recipeType: "Appetizers" | "Main Courses" | "Side dishes" | "Starters" | "Desserts",
  tags: Tag[]
}