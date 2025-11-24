import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 6,

    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      textAlign: "center",
      marginTop: 10,
    },
  }),
  description: {
    marginTop: 2,
    maxWidth: "580px",
  },
  button: (theme: Theme) => ({
    padding: theme.spacing(2, 4),
    marginTop: 4,
  }),
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginTop: 5,
    border: `5px solid white`,
    borderRadius: 2.5,
  },
  highlight: {
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
      backgroundColor: "#FE9F6B",
      zIndex: -1,
      borderRadius: "2px",
      opacity: 0.5,
    },
  },
};
