import { Divider, Drawer, makeStyles } from "@material-ui/core";
import { Variant } from "@testing-library/dom";
import React from "react";
import { ListasMaterialUI } from "../../primeros-pasos/07. listas/listas";

const useEstilos = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

export const Cajon = (props: any) => {
  const classes = useEstilos();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <ListasMaterialUI />
    </Drawer>
  );
};
