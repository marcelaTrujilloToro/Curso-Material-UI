import React from 'react'
import Typography from '@material-ui/core/Typography'


export const TipografiaMaterialUI = () => {
    return (
        <div>
            <Typography variant="h1" color="primary" align="center">
                Tipografia h1
            </Typography>
            <br />
            <Typography variant="body1" color="secondary" align="right"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, placeat?</Typography>
            <br />
            <Typography variant="h4" color="textSecondary">tipografia h4</Typography>
            <br />
            <Typography variant="caption" color="textSecondary">tipografia caption</Typography>
            <br />
            <Typography variant="overline" color="textPrimary">tipografia overline</Typography>
            <br />
            <Typography variant="subtitle1" color="textPrimary">tipografia subtitle 1</Typography>

        </div>
    )
}
