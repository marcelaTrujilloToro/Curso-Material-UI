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
import { NONAME } from "dns";

const useStyles = makeStyles((theme) => ({
    // hace un margin bottom

  menuButton: {
    // por defecto es 8 al poner 2 se multiplica cando un margin de 16
    marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
  },

  // pone el titulo de todo el espacio disponible, asi que manda el login al final
  title:{
      flexGrow:1
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    },
},
}));

export const NavBar = (props: any) => {
  const classes = useStyles();
  return (
    
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => props.accionAbrir()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>AppBar</Typography>
          <Button variant="text" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
  );
};
