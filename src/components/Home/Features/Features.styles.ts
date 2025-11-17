import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  features: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 3,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: 4,
    },
  }),
  feature: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  featureImage: (theme: Theme) => ({
    width: "60px",
    aspectRatio: "1/1",
    padding: theme.spacing(0.5, 1),
    backgroundColor: "white",
    borderRadius: 3,
  }),
};

export default styles;
