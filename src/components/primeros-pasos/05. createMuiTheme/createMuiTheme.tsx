import React from 'react';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../../../themeConfig';

export const CreateMuiTheme = () => {
    return (
        
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Botón
            </Button>
            
            <Button variant="contained" color="secondary">
              Botón
            </Button>
        </ThemeProvider>
    );
};
