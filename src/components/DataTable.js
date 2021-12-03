import * as React from 'react';
import faker from 'faker';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Avatar, Typography} from '@material-ui/core';


let user = [], status = ['ready', 'borrowed']
for (let i = 1; i < 15; i++) {
    user[i] = {
        id: i,
        name: faker.name.findName(),
        equipment:faker.vehicle.vehicle(),
        dateBorrowed: faker.date.past().toLocaleString('en-US'),
        dateReturn: faker.date.past().toLocaleString('en-US'),
        status: status[Math.floor(Math.random() * status.length)],
        img:faker.image.avatar(),
    }
}
const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
    },
    tableContainer:{
        padding: 10,
        borderRadius:10,
        height: 'auto',
    },
    tableHeaderCell:{
        fontWeight:'bold',
        backgroundColor:theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    status:{
        padding: 10,
        color: 'white',
        backgroundColor:'grey',
        borderRadius:8,
        display: 'inline-block',
    },
    avatar:{
        backgroundColor:theme.palette.primary.dark,
    }

  }));

const DataTable = () => {
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.tableHeaderCell}>NO</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Equipment</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Date Borrowed</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Date Return</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>
                                    <Avatar src={row.avatar} className={classes.avatar}/> 
                                    {row.name}
                                       
                                </TableCell>
                                <TableCell>{row.equipment}</TableCell>
                                <TableCell>{row.dateBorrowed}</TableCell>
                                <TableCell>{row.dateReturn}</TableCell>
                                <TableCell>
                                    <Typography className={classes.status}
                                    style={{
                                        backgroundColor:(
                                            (row.status === 'borrowed' && '#e64a19')||
                                            (row.status === 'ready' && 'green')
                                        )
                                    }}
                                    >{row.status}</Typography>
                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}

export default DataTable




