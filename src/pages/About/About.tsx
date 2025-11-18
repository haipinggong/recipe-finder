import { Hero } from "./Hero/Hero";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { WhyWeExist } from "./WhyWeExist/WhyWeExist";
import { FoodPhilosophy } from "./FoodPhilosophy/FoodPhilosophy";
import { BeyondPlate } from "./BeyondPlate/BeyondPlate";

export const About = () => {
  return (
    <MainLayout>
      <Hero />
      <WhyWeExist />
      <FoodPhilosophy />
      <BeyondPlate />
      <CallToAction />
    </MainLayout>
  );
};
