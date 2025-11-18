import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginTop: 8,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(10),
      marginTop: 10,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 12,
      flexDirection: "row",
      gap: 8,
    },
  }),
  dot: (theme: Theme) => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
  }),
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    border: `5px solid white`,
    borderRadius: 2.5,
  },
};

export default styles;
