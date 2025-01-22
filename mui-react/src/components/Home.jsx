import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data=[
    {"NAME":"fathima","COURSE":"Btech","PLACE":"kollam","ADRRESS":"anjali"},
    {"NAME":"sredha","COURSE":"Bca","PLACE":"pta","ADRRESS":"sruthi bhavan"},
    {"NAME":"Gopika","COURSE":"Btech","PLACE":"Tvm","ADRRESS":"gopika villa"}
]

const Home = () => {
  return (
  <>
  <TableContainer>
    
    <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Course </TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Adrress</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {data.map((item) => (
            <TableRow key={item.NAME} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                <TableCell component="th" scope="row">{item.NAME}</TableCell>
              <TableCell >{item.COURSE}</TableCell>
              <TableCell >{item.PLACE}</TableCell>
              <TableCell >{item.ADRRESS}</TableCell>
             
            </TableRow>
        ))}
        </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}
export default Home