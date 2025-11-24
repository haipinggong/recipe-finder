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
  title: (theme: Theme) => ({
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-4px",
      right: "-4px",
      height: "1.25em",
      backgroundColor: theme.palette.orange.main,
      zIndex: -1,
      borderRadius: 1,
    },
  }),
  description: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginTop: 5,
    border: `5px solid white`,
    borderRadius: 2.5,
  },
};

export default styles;
