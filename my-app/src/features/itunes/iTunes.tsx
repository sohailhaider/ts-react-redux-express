import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectResults,
    searchByTerm,
    selectIsLoading,
    selectIsSearched
} from './itunesSlice';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ResultsTable } from './ResultsTable'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export function ITunes() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const results = useSelector(selectResults);
    const isLoading = useSelector(selectIsLoading);
    const isSearched = useSelector(selectIsSearched);

    const [searchTerm, setSearchTerm] = useState('');
    const handleOnSubmit = (e:any):void => {
        e.preventDefault();
        dispatch(searchByTerm(searchTerm))
    }
    return (
    <div>
        <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
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
                    <TextField autoFocus={true} value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} fullWidth={true} inputProps={{min: 0, style: { textAlign: 'center' }}} id="outlined-basic" label="Input Term to Search" variant="outlined" />
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
        <Grid container>
            {isSearched&&
            <ResultsTable data={results}/>
            }
        </Grid>
    </div>)
}