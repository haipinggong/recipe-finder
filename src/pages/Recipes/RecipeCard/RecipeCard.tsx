import { Box, Button, Typography } from "@mui/material";
import { styles } from "./RecipeCard.styles";
import { RecipeDetails } from "../RecipeDetails/RecipeDetails";
import servingsIcon from "../../../assets/images/icon-servings.svg";
import prepMinutesIcon from "../../../assets/images/icon-prep-time.svg";
import cookMinutesIcon from "../../../assets/images/icon-cook-time.svg";

interface RecipeCardProps {
  imageUrl: string;
  title: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}
export const RecipeCard = ({
  imageUrl,
  title,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
}: RecipeCardProps) => {
  return (
    <Box sx={styles.container}>
      <Box component="img" src={imageUrl} alt={title} sx={styles.image} />
      <Typography variant="h2">{title}</Typography>
      <Typography>{overview}</Typography>
      <Box sx={styles.details}>
        <RecipeDetails
          iconUrl={servingsIcon}
          label="Servings"
          value={servings.toString()}
        />
        <RecipeDetails
          iconUrl={prepMinutesIcon}
          label="Prep Minutes"
          value={`${prepMinutes} mins`}
        />
        <RecipeDetails
          iconUrl={cookMinutesIcon}
          label="Cook Minutes"
          value={`${cookMinutes} mins`}
        />
      </Box>
      <Button variant="contained" color="primary" sx={styles.button}>
        View Recipe
      </Button>
    </Box>
  );
};
