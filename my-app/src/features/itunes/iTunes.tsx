import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

export function ITunes() {

    return (<div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" gutterBottom>
                    iTunes Search Engine
                </Typography>
            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={8}>
                <TextField fullWidth={true} inputProps={{min: 0, style: { textAlign: 'center' }}} id="outlined-basic" label="Input Term to Search" variant="outlined" />
            </Grid>
        </Grid>
    </div>)
}