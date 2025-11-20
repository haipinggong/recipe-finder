import { Box, Typography } from "@mui/material";
import { styles } from "./RecipeDetails.styles";

interface RecipeDetailsProps {
  iconUrl: string;
  label: string;
  value: string;
}
export const RecipeDetails = ({
  iconUrl,
  label,
  value,
}: RecipeDetailsProps) => {
  return (
    <Box sx={styles.container}>
      <Box component="img" src={iconUrl} alt={label} sx={styles.icon} />
      <Typography variant="body2">{`${label}: ${value}`}</Typography>
    </Box>
  );
};
