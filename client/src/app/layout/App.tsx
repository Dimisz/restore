import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#eaeaea"
      }
    }
  })
  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(`Error fetching data: ${e}`))
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Box sx={{
        minHeight: '100vh',
        background: darkMode ? "#121212": "#eaeaea",
        py: 6
      }}>
        <Container maxWidth='xl' sx={{mt: 8}}>
          <Box display='flex' justifyContent='center' gap={3} marginY={3}>
          </Box>
          <Catalog products={products}/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
