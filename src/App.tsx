import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Recipes } from "./pages/Recipes/Recipes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
