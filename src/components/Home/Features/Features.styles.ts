import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,

    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(10),
      borderBottom: "1px solid #E0E6E3",
    },
  }),
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
