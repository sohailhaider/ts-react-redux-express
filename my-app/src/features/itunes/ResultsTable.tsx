import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ResultPreview from './ResultPreview'



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

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
export function ResultsTable(props:IResultTableProps) {
    console.log(props.data);
    const classes = useStyles();
    // const rows = props.data.map((c:any) => createData(c.previewUrl, c.artistName, c.collectionPrice, c.wrapperType, c.country) )
    return (
        // <TableContainer component={Paper}>
        //   <Table className={classes.table} aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Preview</TableCell>
        //         <TableCell align="right">Artist Name</TableCell>
        //         <TableCell align="right">Collection Price($)</TableCell>
        //         <TableCell align="right">Type</TableCell>
        //         <TableCell align="right">Country</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rows.map((row) => (
        //         <TableRow key={row.previewUrl}>
        //           <TableCell component="th" scope="row">
        //             {row.previewUrl}
        //           </TableCell>
        //           <TableCell align="right">{row.artistName}</TableCell>
        //           <TableCell align="right">{row.collectionPrice}</TableCell>
        //           <TableCell align="right">{row.type}</TableCell>
        //           <TableCell align="right">{row.country}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>

        <Box mt={5} ml={3} mr={3}>
            <Grid container spacing={3}>
                {
                    props.data.map((d, index) => {
                        return <ResultPreview 
                            artistName={d.artistName}
                            previewUrl={d.artworkUrl100}
                            country={d.country} 
                            collectionName={d.collectionName} 
                            collectionPrice={d.collectionPrice}
                            type={`${d.wrapperType} ${d.kind?' - '+d.kind:''}`}
                            currency={d.currency}
                            key={d.artistId} />
                    })
                }
            </Grid>
        </Box>
      );
}