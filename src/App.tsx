import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Recipes } from "./pages/Recipes/Recipes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      <Recipes />
      <Footer />
    </>
  );
}

export default App;
