import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  {title: "catalog", path: "/catalog"},
  {title: "about", path: "/about"},
  {title: "contacts", path: "/contacts"},
];

const rightLinks = [
  {title: "login", path: "/login"},
  {title: "register", path: "/register"},
];

type NavBarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
}
export default function NavBar({darkMode, toggleTheme}: NavBarProps){
  return(
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RESTORE</Typography>
        <IconButton onClick={toggleTheme}>
          {darkMode ? <DarkMode /> : <LightMode sx={{color: "yellow"}}/>}
        </IconButton>
        <List sx={{display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'inherit', tyography: 'h6'}}
            >{title.toUpperCase()}</ListItem>
          ))}
        </List>

        <IconButton size="large" sx={{color: 'inherit'}}>
          <Badge badgeContent='4' color='secondary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{display: 'flex'}}>
          {rightLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'inherit', tyography: 'h6'}}
            >{title.toUpperCase()}</ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}