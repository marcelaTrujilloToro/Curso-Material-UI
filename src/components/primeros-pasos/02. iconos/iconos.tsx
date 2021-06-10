import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DeleteIcon from "@material-ui/icons/Delete";
import { Icon, Button, IconButton } from "@material-ui/core";

export const IconosMaterialUI = () => {
  return (
    <div>
      {/* iconos SVG */}
      <DeleteIcon color="error" fontSize="large" />

      {/* iconos google */}
      <Icon color="primary">room</Icon>

      {/* combinar botones con iconos svg */}

      <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
        Home
      </Button>

      {/* combinar botones con iconos fuente*/}

      <Button variant="outlined" color="primary" endIcon={<Icon>home</Icon>}>
        Home
      </Button>

        {/* icono como un boton */}
      <IconButton aria-label="Delete">
        <DeleteIcon color="secondary" fontSize="large" />
      </IconButton>
    </div>
  );
};
