import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({

   
    // cambiar el color que tiene por defecto primary por el que se requiera
    palette: {
        // opcion 1
        
        success:{

            // opcion 1.0
            main: '#69f0ae'

            // opcion 1.1
            // main: green[400]
        },

        // opcion 2
        // primary: green
    },
});

export default theme;