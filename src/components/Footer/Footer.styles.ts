import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    paddingBlock: theme.spacing(4, 2),
  }),
  socialMedia: {
    display: "flex",
    gap: 2,
  },
  copyright: {
    fontSize: "1rem",
    fontFamily: "Nunito Sans, sans-serif",
    lineHeight: "150%",
    letterSpacing: "-0.3px",
  },
};
