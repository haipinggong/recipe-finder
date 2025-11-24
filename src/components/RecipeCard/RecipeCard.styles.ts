import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
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
  details: {
    display: "flex",
    columnGap: 2,
    rowGap: 1,
    flexWrap: "wrap",
  },
  button: (theme: Theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: 999,
    padding: theme.spacing(1.5, 4),
  }),
};

export default styles;
