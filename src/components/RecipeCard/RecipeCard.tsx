import { Box, Button, Typography, useTheme } from "@mui/material";
import styles from "./RecipeCard.styles";
import { RecipeMetaInfo } from "../RecipeMetaInfo/RecipeMetaInfo";
import servingsIcon from "../../assets/images/icon-servings.svg";
import prepMinutesIcon from "../../assets/images/icon-prep-time.svg";
import cookMinutesIcon from "../../assets/images/icon-cook-time.svg";
import { Link } from "react-router-dom";
import { type SxProps, type Theme } from "@mui/material/styles";
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
  const theme = useTheme();
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
        sx={[theme.typography.body2, styles.button] as SxProps<Theme>}
        fullWidth
        component={Link}
        to={`/recipe/${slug}`}
      >
        View Recipe
      </Button>
    </Box>
  );
};
