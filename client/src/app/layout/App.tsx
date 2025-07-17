import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

function App() {
  const {darkMode} = useAppSelector(state => state.ui)

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
      <NavBar />
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
