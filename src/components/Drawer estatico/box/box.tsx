import { Box } from '@material-ui/core'
import React from 'react'

export const BoxMaterialUI = () => {
    return (
        <div>
            <Box 
                color='primary.main'
            >
                Marcela
            </Box>
            <Box 
                color='primary.contrastText'
                bgcolor= 'primary.main'
            >
                hola
            </Box>
            <Box 
                color='primary.contrastText'
                bgcolor= 'primary.main'
                m={2}
                px={5}
            >
                hola
            </Box>

            <Box 
                m={2}
                p={5}
                border={2}
                borderColor="error.main"
            >
                Hola
            </Box>
        </div>
    )
}
