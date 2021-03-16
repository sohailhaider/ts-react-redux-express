import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export function ITunes() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleOnSubmit = (e:any):void => {
        e.preventDefault();
        console.log(searchTerm)
    }
    return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box mt={10}>
                        <Typography variant="h2" align="center" gutterBottom>
                            iTunes Search Engine
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <TextField value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} fullWidth={true} inputProps={{min: 0, style: { textAlign: 'center' }}} id="outlined-basic" label="Input Term to Search" variant="outlined" />
                </Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="row-reverse">
                        <Button type="submit" variant="contained" color="primary" size="large" disableElevation>
                            Search
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </form>
    </div>)
}