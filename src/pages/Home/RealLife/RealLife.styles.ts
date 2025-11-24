import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginTop: 8,
    [theme.breakpoints.up("sm")]: {
      marginTop: 10,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      marginTop: 12,
    },
  }),
  content: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
    [theme.breakpoints.up("md")]: {
      flex: 1,
      maxWidth: "40%",
    },
  }),
  imageWrapper: (theme: Theme) => ({
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
  highlight: (theme: Theme) => ({
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      display: "inline-block",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "-4px",
        right: "-4px",
        top: "50%",
        transform: "translateY(-10%)",
        height: "0.6em",
        backgroundColor: theme.palette.orange.main,
        zIndex: -1,
        borderRadius: "2px",
      },
    },
  }),
};

export default styles;
