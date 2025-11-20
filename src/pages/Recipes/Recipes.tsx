import { useState, type ChangeEvent } from "react";
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
  TextField,
} from "@mui/material";
import { styles } from "./Recipes.styles";
import { getRecipeImageUrl } from "../../utils/recipeImages";
import searchIcon from "../../assets/images/icon-search.svg";

export const Recipes = () => {
  const [maxPrepTime, setMaxPrepTime] = useState("");
  const [maxCookTime, setMaxCookTime] = useState("");
  const [search, setSearch] = useState("");

  const handlePrepTimeChange = (event: SelectChangeEvent<string>) => {
    setMaxPrepTime(event.target.value);
  };

  const handleCookTimeChange = (event: SelectChangeEvent<string>) => {
    setMaxCookTime(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredRecipes = recipesData.filter((recipe) => {
    if (search) {
      const searchLower = search.toLowerCase();
      const titleMatches = recipe.title.toLowerCase().includes(searchLower);
      const ingredientMatches = recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchLower)
      );
      if (!titleMatches && !ingredientMatches) {
        return false;
      }
    }

    const prepTimeMatches =
      !maxPrepTime || recipe.prepMinutes <= Number(maxPrepTime);
    const cookTimeMatches =
      !maxCookTime || recipe.cookMinutes <= Number(maxCookTime);

    return prepTimeMatches && cookTimeMatches;
  });

  return (
    <MainLayout>
      <Hero />
      <Box component="section" sx={styles.filtersContainer}>
        <Box sx={styles.selectsContainer}>
          <FormControl sx={styles.selectControl}>
            <InputLabel id="max-prep-time-label">Max Prep Time</InputLabel>
            <Select
              labelId="max-prep-time-label"
              id="max-prep-time-select"
              value={maxPrepTime}
              label="Max Prep Time"
              onChange={handlePrepTimeChange}
              sx={styles.input}
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
              sx={styles.input}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="5">5 minutes</MenuItem>
              <MenuItem value="10">10 minutes</MenuItem>
              <MenuItem value="15">15 minutes</MenuItem>
              <MenuItem value="20">20 minutes</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          placeholder="Search by name or ingredient…"
          value={search}
          onChange={handleSearchChange}
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <Box
                  component="img"
                  src={searchIcon}
                  alt="search"
                  sx={styles.searchIcon}
                />
              ),
              sx: styles.input,
            },
          }}
          sx={styles.searchBar}
        />
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
