import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { RealLife } from "./RealLife/RealLife";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { MainLayout } from "../../components/MainLayout/MainLayout";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <RealLife />
      <CallToAction />
    </MainLayout>
  );
};
