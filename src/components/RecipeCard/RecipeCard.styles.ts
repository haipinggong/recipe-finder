import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 1,
    gap: 2,
    backgroundColor: "white",
    borderRadius: 2.5,
    height: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
    border: `5px solid white`,
    borderRadius: 2.5,
  },
  title: (theme: Theme) => ({
    fontSize: "1.25rem",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    fontWeight: theme.typography.fontWeightBold,
  }),
  details: {
    display: "flex",
    columnGap: 2,
    rowGap: 1,
    flexWrap: "wrap",
  },
  button: (theme: Theme) => ({
    textTransform: "none",
    borderRadius: 999,
    padding: theme.spacing(1.5, 4),
    fontSize: "1rem",
    lineHeight: "150%",
    letterSpacing: "-0.3px",
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans, sans-serif",
  }),
};
