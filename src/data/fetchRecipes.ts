import { RecipeSummary, RecipeDetails } from "../types/Recipe";

const API_URL = "http://localhost:3500/recipes";

export async function fetchRecipeSummaries(): Promise<RecipeSummary[]> {
  const response = await fetch(API_URL);

  if (!response.ok) throw new Error("Failed to fetch recipes");

  const data: RecipeSummary[] = await response.json();

  return data;
}

export async function fetchRecipeDetails(id: string): Promise<RecipeDetails> {
  const detailsAPI_URL = `${API_URL}/${id}`;
  const response = await fetch(detailsAPI_URL);

  console.log(detailsAPI_URL);
  if (!response.ok) throw new Error("Failed to fetch recipes");

  const data: RecipeDetails = await response.json();
  return data;
}