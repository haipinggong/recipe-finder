import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  description: {
    marginTop: 2,
  },
  button: (theme: Theme) => ({
    textTransform: "none",
    borderRadius: 2.5,
    padding: theme.spacing(2, 4),
    fontSize: "1.25rem",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    fontWeight: theme.typography.fontWeightBold,
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
};
