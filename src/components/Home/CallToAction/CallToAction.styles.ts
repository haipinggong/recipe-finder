import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    backgroundColor: "#E0E6E3",
    borderRadius: 4,
    padding: theme.spacing(6, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    textAlign: "center",
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  button: (theme: Theme) => ({
    textTransform: "none",
    borderRadius: 2.5,
    padding: theme.spacing(2, 3),
    fontSize: "1.25rem",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    fontWeight: theme.typography.fontWeightBold,
  }),
};

export default styles;
