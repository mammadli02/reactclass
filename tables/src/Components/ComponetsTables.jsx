import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ComponentsTables = ({passenger}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">country</TableCell>
            <TableCell align="right">trips</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {passenger.data?.map((passengers) => (
            <TableRow
              key={passengers.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{passengers.airline.name}</TableCell>
              <TableCell align="right">{passengers.airline.country}</TableCell>
              <TableCell align="right">{passengers.trips}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ComponentsTables
