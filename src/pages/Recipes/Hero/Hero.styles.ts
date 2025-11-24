import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 6,
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
      marginTop: 10,
      flexDirection: "row",
      gap: 8,
    },
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 3,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

export default styles;
