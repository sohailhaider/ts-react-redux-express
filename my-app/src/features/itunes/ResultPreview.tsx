import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 100,
      height: 100
    }
  }),
);

interface IPreviewData {
    previewUrl?: string, 
    artistName?: string, 
    collectionPrice?: number,
    collectionName?: string,
    type?: string,
    country?: string,
    currency: string
}

export default function ResultPreview(props: IPreviewData) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.root}>
            <Grid item xs={12} md={7} className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {props.artistName}
                </Typography>
                <Typography color="textSecondary">
                <b>Collection Name - Country: </b>{props.collectionName} - {props.country}
                </Typography>
                <Typography color="textSecondary">
                    <b>Price: </b>{props.collectionPrice} {props.currency}
                </Typography>
                <Typography>
                    <b>Type: </b>{props.type}
                </Typography>
                </CardContent>
                
            </Grid>
            <Grid item xs={12} md={5}>
                <Box display="flex" flexDirection="row-reverse">
                    <CardMedia
                        component="img"
                        className={classes.cover}
                        image={props.previewUrl}
                        title="Live from space album cover"
                    />
                </Box>
            </Grid>
        </Card>
    </Grid>
  );
}