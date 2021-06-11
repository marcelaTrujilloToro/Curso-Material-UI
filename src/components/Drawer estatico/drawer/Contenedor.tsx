import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../../primeros-pasos/06. nav-bar/NavBar";
import { Cajon } from "../cajon/cajon";
import { Hidden } from "@material-ui/core";
import { BoxMaterialUI } from "../box/box";
import { GridMaterialUI } from "../grid/grid";

const useEstilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const Contenedor = () => {
  const classes = useEstilos();

  const [abrirMenu, setAbrirMenu] = useState<boolean>(false);

  const accionAbrir = () => {
    setAbrirMenu(!abrirMenu);
  };

  return (
    <div className={classes.root}>
      <NavBar accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrirMenu} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        contenido
        <BoxMaterialUI />
        <GridMaterialUI/>
      </div>
    </div>
  );
};
