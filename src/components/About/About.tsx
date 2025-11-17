import { Box } from "@mui/material";
import { Hero } from "./Hero/Hero";
// import { Features } from "./Features/Features";
// import { RealLife } from "./RealLife/RealLife";
import { CallToAction } from "../CallToAction/CallToAction";
import { styles } from "./About.styles";

export const About = () => {
  return (
    <Box component="main" sx={styles.container}>
      <Hero />
      {/* <Features />
      <RealLife /> */}
      <CallToAction />
    </Box>
  );
};
