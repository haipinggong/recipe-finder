import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
    },
  }),
  content: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
  }),
  imageWrapper: (theme: Theme) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
  }),
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 2.5,
  },
};

export default styles;
