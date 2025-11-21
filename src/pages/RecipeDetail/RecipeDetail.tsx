import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import recipesData from "../../data/data.json";
import { RecipeMetaInfo } from "../../components/RecipeMetaInfo/RecipeMetaInfo";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import { styles } from "./RecipeDetail.styles";
import { getRecipeImageUrl } from "../../utils/recipeImages";
import servingsIcon from "../../assets/images/icon-servings.svg";
import prepMinutesIcon from "../../assets/images/icon-prep-time.svg";
import cookMinutesIcon from "../../assets/images/icon-cook-time.svg";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import iconBulletPoint from "../../assets/images/icon-bullet-point.svg";

export const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <Box>
        <Typography variant="h1">Invalid recipe URL</Typography>
      </Box>
    );
  }

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
      <Box component="section" sx={styles.container}>
        <Box
          component="img"
          src={getRecipeImageUrl(recipe.image.large)}
          alt={recipe.title}
          sx={styles.image}
        />
        <Box sx={styles.content}>
          <Typography component="h1" variant="h2">
            {recipe.title}
          </Typography>
          <Typography variant="body2">{recipe.overview}</Typography>
          <Box sx={styles.details}>
            <RecipeMetaInfo
              iconUrl={servingsIcon}
              label="Servings"
              value={recipe.servings.toString()}
            />
            <RecipeMetaInfo
              iconUrl={prepMinutesIcon}
              label="Prep Minutes"
              value={`${recipe.prepMinutes} mins`}
            />
            <RecipeMetaInfo
              iconUrl={cookMinutesIcon}
              label="Cook Minutes"
              value={`${recipe.cookMinutes} mins`}
            />
          </Box>
          <Box sx={styles.ingredientsContainer}>
            <Typography variant="h3">Ingredients</Typography>
            <List sx={styles.ingredients}>
              {recipe.ingredients.map((ingredient) => (
                <ListItem key={ingredient} alignItems="flex-start">
                  <ListItemIcon>
                    <Box
                      component="img"
                      src={iconBulletPoint}
                      alt="bullet point"
                    />
                  </ListItemIcon>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={styles.instructionsContainer}>
            <Typography variant="h3">Instructions</Typography>
            <List sx={styles.instructions}>
              {recipe.instructions.map((instruction) => (
                <ListItem key={instruction} alignItems="flex-start">
                  <ListItemIcon>
                    <Box
                      component="img"
                      src={iconBulletPoint}
                      alt="bullet point"
                    />
                  </ListItemIcon>
                  <ListItemText primary={instruction} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box component="section" sx={styles.moreRecipesContainer}>
        <Typography variant="h3">More recipes</Typography>
        <Box sx={styles.moreRecipes}>
          {recipesData.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              imageUrl={getRecipeImageUrl(recipe.image.large)}
            />
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};
