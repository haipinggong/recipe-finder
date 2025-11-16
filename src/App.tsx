import { Home } from "./components/Home/Home";
import Box from "@mui/material/Box";
import { styles } from "./App.styles";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Box sx={styles.container}>
      <Header />
      <Box component="main" sx={styles.main}>
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
