import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Icon,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    // hace un margin bottom
  offset: theme.mixins.toolbar,
  menuButton: {
    // por defecto es 8 al poner 2 se multiplica cando un margin de 16
    marginRight: theme.spacing(2),
  },

  // pone el titulo de todo el espacio disponible, asi que manda el login al final
  title:{
      flexGrow:1
  }
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="inherit"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>AppBar</Typography>
          <Button variant="text" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iste odio tempore repellendus aliquam quod.</p>
    </div>
  );
};
