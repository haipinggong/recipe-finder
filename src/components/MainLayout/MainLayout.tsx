import { Box } from "@mui/material";
import styles from "./MainLayout.styles";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="main" sx={styles.container}>
      {children}
    </Box>
  );
};
