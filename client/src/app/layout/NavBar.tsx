import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
type NavBarProps = {
  darkMode: boolean,
  toggleTheme: () => void
}
export default function NavBar({darkMode, toggleTheme}: NavBarProps){
  return(
    <AppBar position="fixed">
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6">RESTORE</Typography>
        <IconButton onClick={toggleTheme}>
          {darkMode ? <DarkMode /> : <LightMode/>}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}