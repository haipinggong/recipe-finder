import { Box } from "@mui/material";
import { Hero } from "./Hero/Hero";
// import { Features } from "./Features/Features";
// import { RealLife } from "./RealLife/RealLife";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { styles } from "./About.styles";
import { WhyWeExist } from "./WhyWeExist/WhyWeExist";
import { FoodPhilosophy } from "./FoodPhilosophy/FoodPhilosophy";

export const About = () => {
  return (
    <Box component="main" sx={styles.container}>
      <Hero />
      <WhyWeExist />
      <FoodPhilosophy />
      <CallToAction />
    </Box>
  );
};
