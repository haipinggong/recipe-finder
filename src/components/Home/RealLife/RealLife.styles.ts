import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 2.5,
  },
};

export default styles;
