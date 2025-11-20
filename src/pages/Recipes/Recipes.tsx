import { useState } from "react";
import { Hero } from "./Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import recipesData from "../../data/data.json";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { styles } from "./Recipes.styles";
import { getRecipeImageUrl } from "../../utils/recipeImages";

export const Recipes = () => {
  const [maxPrepTime, setMaxPrepTime] = useState("");
  const [maxCookTime, setMaxCookTime] = useState("");

  const handlePrepTimeChange = (event: SelectChangeEvent<string>) => {
    setMaxPrepTime(event.target.value);
  };

  const handleCookTimeChange = (event: SelectChangeEvent<string>) => {
    setMaxCookTime(event.target.value);
  };

  const filteredRecipes = recipesData.filter((recipe) => {
    if (!maxPrepTime && !maxCookTime) return true;
    if (maxPrepTime && !maxCookTime)
      return recipe.prepMinutes <= Number(maxPrepTime);
    if (!maxPrepTime && maxCookTime)
      return recipe.cookMinutes <= Number(maxCookTime);
    if (maxPrepTime && maxCookTime)
      return (
        recipe.prepMinutes <= Number(maxPrepTime) &&
        recipe.cookMinutes <= Number(maxCookTime)
      );
    return false;
  });

  return (
    <MainLayout>
      <Hero />
      <Box sx={styles.filtersContainer}>
        <FormControl sx={styles.selectControl}>
          <InputLabel id="max-prep-time-label">Max Prep Time</InputLabel>
          <Select
            labelId="max-prep-time-label"
            id="max-prep-time-select"
            value={maxPrepTime}
            label="Max Prep Time"
            onChange={handlePrepTimeChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="5">5 minutes</MenuItem>
            <MenuItem value="10">10 minutes</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={styles.selectControl}>
          <InputLabel id="max-cook-time-label">Max Cook Time</InputLabel>
          <Select
            labelId="max-cook-time-label"
            id="max-cook-time-select"
            value={maxCookTime}
            label="Max Cook Time"
            onChange={handleCookTimeChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="5">5 minutes</MenuItem>
            <MenuItem value="10">10 minutes</MenuItem>
            <MenuItem value="15">15 minutes</MenuItem>
            <MenuItem value="20">20 minutes</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={styles.recipesContainer}>
        {filteredRecipes.map((recipe) => (
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
