import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
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
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
