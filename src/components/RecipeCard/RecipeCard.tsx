import { Box, Button, Typography } from "@mui/material";
import { styles } from "./RecipeCard.styles";
import { RecipeMetaInfo } from "../RecipeMetaInfo/RecipeMetaInfo";
import servingsIcon from "../../assets/images/icon-servings.svg";
import prepMinutesIcon from "../../assets/images/icon-prep-time.svg";
import cookMinutesIcon from "../../assets/images/icon-cook-time.svg";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}
export const RecipeCard = ({
  slug,
  imageUrl,
  title,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
}: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Box component="img" src={imageUrl} alt={title} sx={styles.image} />
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="body2">{overview}</Typography>
      <Box sx={styles.details}>
        <RecipeMetaInfo
          iconUrl={servingsIcon}
          label="Servings"
          value={servings.toString()}
        />
        <RecipeMetaInfo
          iconUrl={prepMinutesIcon}
          label="Prep Minutes"
          value={`${prepMinutes} mins`}
        />
        <RecipeMetaInfo
          iconUrl={cookMinutesIcon}
          label="Cook Minutes"
          value={`${cookMinutes} mins`}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={styles.button}
        fullWidth
        onClick={() => navigate(`/recipe/${slug}`)}
      >
        View Recipe
      </Button>
    </Box>
  );
};
