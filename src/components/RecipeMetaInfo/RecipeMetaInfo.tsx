import { Box, Typography } from "@mui/material";
import { styles } from "./RecipeMetaInfo.styles";

interface RecipeMetaInfoProps {
  iconUrl: string;
  label: string;
  value: string;
}
export const RecipeMetaInfo = ({
  iconUrl,
  label,
  value,
}: RecipeMetaInfoProps) => {
  return (
    <Box sx={styles.container}>
      <Box component="img" src={iconUrl} alt={label} />
      <Typography variant="body2">{`${label}: ${value}`}</Typography>
    </Box>
  );
};
