import React from 'react';
import { withWidth, Typography, Hidden, Button } from '@material-ui/core';

const OcultoMaterialUI = (props: any) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>


            {/* Down oculta cuando esta en pantallas del tamaño o inferiores */}
            <Hidden smDown>
                <Button variant="contained" color="secondary">
                    XS
                </Button>
            </Hidden>
            {/* up cuando sean pantallas mayores  */}
            <Hidden mdUp>
                <Button variant="contained" color="secondary">
                    MD
                </Button>
            </Hidden>

            {/* only oculta segun lo que se pase en la propiedad (solo en esos casos)*/}
            <Hidden only={['lg', 'sm']}>
                <Button variant="contained" color="secondary">
                    LG
                </Button>
            </Hidden>
        </div>
    );
};
export default withWidth()(OcultoMaterialUI);
