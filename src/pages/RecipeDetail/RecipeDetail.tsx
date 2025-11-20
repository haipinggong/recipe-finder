import { MainLayout } from "../../components/MainLayout/MainLayout";
import recipesData from "../../data/data.json";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styles } from "./RecipeDetail.styles";
import { getRecipeImageUrl } from "../../utils/recipeImages";
import searchIcon from "../../assets/images/icon-search.svg";

interface RecipeDetailProps {
  slug: string;
}

export const RecipeDetail = ({ slug }: RecipeDetailProps) => {
  const recipe = recipesData.find((recipe) => recipe.slug === slug);
  if (!recipe) {
    return (
      <Box>
        <Typography variant="h1">Recipe not found</Typography>
      </Box>
    );
  }

  return (
    <MainLayout>
      <Box sx={styles.container}>
        <Box
          component="img"
          src={getRecipeImageUrl(recipe.image.large)}
          alt={recipe.title}
          sx={styles.image}
        />
        <Typography variant="h1">{recipe.title}</Typography>
        <Typography variant="body2">{recipe.overview}</Typography>
      </Box>
      {/* {filteredRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          {...recipe}
          imageUrl={getRecipeImageUrl(recipe.image.large)}
        />
      ))} */}
    </MainLayout>
  );
};
