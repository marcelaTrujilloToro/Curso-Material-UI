import React from 'react';
import{
    makeStyles
} from '@material-ui/core/styles';
import { NavBar } from '../../primeros-pasos/06. nav-bar/NavBar';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

export const Contenedor = () => {

    const classes = estilos();

    return (
        <div className={classes.root}>
            <NavBar/>
        </div>
    )
}
