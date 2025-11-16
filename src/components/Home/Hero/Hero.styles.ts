import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
