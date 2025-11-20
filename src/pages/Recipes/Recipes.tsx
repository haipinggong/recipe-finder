import { Hero } from "./Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import recipesData from "../../data/data.json";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import { Box } from "@mui/material";
import { styles } from "./Recipes.styles";
import { getRecipeImageUrl } from "../../utils/recipeImages";

export const Recipes = () => {
  console.log(recipesData);

  return (
    <MainLayout>
      <Hero />
      <Box sx={styles.recipes}>
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            imageUrl={getRecipeImageUrl(recipe.image.large)}
          />
        ))}
      </Box>
    </MainLayout>
  );
};
