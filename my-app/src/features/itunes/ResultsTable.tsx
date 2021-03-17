import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ResultPreview from './ResultPreview';
import { useDispatch } from 'react-redux';
import {
    setIsLoading
} from './itunesSlice';



interface IResultTableProps {
    data: any[]
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(previewUrl: string, artistName: string, collectionPrice:number, type: string, country: String) {
  return { previewUrl, artistName, collectionPrice, type, country };
}
export function ResultsTable(props:IResultTableProps) {
    const dispatch = useDispatch();
    let count = 10;
    const [showCount, setShowCount] = useState(10)
    const loadMore = () => {
        const height = (document && document.scrollingElement && document.scrollingElement.scrollHeight)?document.scrollingElement.scrollHeight : 999999;
        console.log("comparing", window.innerHeight + document?.documentElement.scrollTop, height)
        if (window.innerHeight + document?.documentElement.scrollTop >= height) {
            console.log('loading more', count)
            if(count < 200) {
                dispatch(setIsLoading(true));
                setTimeout(() => {
                    count +=10;
                    setShowCount(count)
                    dispatch(setIsLoading(false));
                }, 1000)
            }
        }
    }
    useEffect(() => {
        count = 10;
        setShowCount(10);
        window.addEventListener('scroll', loadMore);
        return () => {
            window.removeEventListener('scroll', loadMore);
        }
    }, [])
    return (
        <Box mt={5} ml={3} mr={3}>
            {
                props.data.length === 0 &&
                <Grid>
                    <Typography variant="h3" align="center" gutterBottom>
                        NO RESULT FOUND!
                    </Typography>
                </Grid>
            }
            <Grid container spacing={3}>
                {
                    props.data.filter((x, index) => (index <showCount)? true: false).map((d, index) => {
                        return <ResultPreview 
                            artistName={d.artistName}
                            previewUrl={d.artworkUrl100}
                            country={d.country} 
                            collectionName={d.collectionName} 
                            collectionPrice={d.collectionPrice}
                            type={`${d.wrapperType} ${d.kind?' - '+d.kind:''}`}
                            currency={d.currency}
                            trackName={d.trackName}
                            key={index} />
                    })
                }
            </Grid>
        </Box>
      );
}