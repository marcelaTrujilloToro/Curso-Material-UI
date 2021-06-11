import { Box, Grid } from '@material-ui/core'
import React from 'react'

export const GridMaterialUI = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        border={2}
                    >XS</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        border={2}
                    >XS</Box>
                </Grid>
            </Grid>
        </div>
    )
}
