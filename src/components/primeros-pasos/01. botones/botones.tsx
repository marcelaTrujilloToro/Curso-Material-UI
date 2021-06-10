import { Button } from '@material-ui/core'
import React from 'react'

const BotonesMaterialUI = () => {
    return (
        <div>
            <Button variant="contained" color="secondary">
        Aceptar
      </Button>
      {/* disableElevation desabilita la "sombra" del boton */}
      <Button variant="outlined" color="primary" disableElevation>
        Disable Elevation
      </Button>

      {/* href:  sin onClick va a la direccion especificada*/}
      <Button variant="contained" color="primary" href='https://github.com/marcelaTrujilloToro'>
        GitHub
      </Button>

      {/* hacelo de todo el ancho disponible */}
      <Button variant="contained" color="primary" fullWidth>
        FullWidth
      </Button>
      <Button variant="contained" color="secondary" size="small">
        small
      </Button>
      <Button variant="outlined" color="secondary" size="medium">
        Medium
      </Button>
      <Button variant="contained" color="secondary" size="large">
        Large
      </Button>
        </div>
    )
};
export default BotonesMaterialUI;
